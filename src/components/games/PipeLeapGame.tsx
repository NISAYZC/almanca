import { useCallback, useEffect, useRef, useState } from "react";
import { marioWords } from "../../data/mario-games";

const W = 800;
const H = 420;
const GRAVITY = 0.35;
const FLAP = -7.2;

type Phase = "ready" | "playing" | "won" | "lost";

interface PipePair {
  x: number;
  gapY: number;
  gapH: number;
  wordTop: (typeof marioWords)[0];
  wordBot: (typeof marioWords)[0];
  scored: boolean;
}

const PipeLeapGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [targetLabel, setTargetLabel] = useState("");
  const [seed, setSeed] = useState(0);
  const flapRef = useRef(false);

  const state = useRef({
    phase: "ready" as Phase,
    py: H / 2,
    pvy: 0,
    anim: 0,
    score: 0,
    target: marioWords[0],
    pipes: [] as PipePair[],
    speed: 3.2,
    passed: 0,
    goal: 8,
  });

  const best = localStorage.getItem("unideutsch_best_pipeleap") || "0";

  const build = useCallback(() => {
    const target = marioWords[Math.floor(Math.random() * marioWords.length)];
    const pipes: PipePair[] = [];
    for (let i = 0; i < 10; i++) {
      const gapY = 100 + Math.random() * 160;
      const correctOnTop = Math.random() > 0.5;
      let other = marioWords[Math.floor(Math.random() * marioWords.length)];
      while (other.id === target.id) {
        other = marioWords[Math.floor(Math.random() * marioWords.length)];
      }
      pipes.push({
        x: 420 + i * 260,
        gapY,
        gapH: 120,
        wordTop: correctOnTop ? target : other,
        wordBot: correctOnTop ? other : target,
        scored: false,
      });
    }

    state.current = {
      phase: "playing",
      py: H / 2,
      pvy: 0,
      anim: 0,
      score: 0,
      target,
      pipes,
      speed: 3.2,
      passed: 0,
      goal: 8,
    };
    setTargetLabel(`${target.de} (${target.tr}) ${target.emoji}`);
    setScore(0);
    setPhase("playing");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["Space", "ArrowUp", "KeyW"].includes(e.code)) {
        e.preventDefault();
        flapRef.current = true;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(32, now - last) / 16.67;
      last = now;
      const s = state.current;
      if (s.phase !== "playing") return;

      s.anim += 0.25 * dt;

      if (flapRef.current) {
        s.pvy = FLAP;
        flapRef.current = false;
      }

      s.pvy += GRAVITY * dt;
      s.py += s.pvy * dt;

      if (s.py < 0 || s.py > H - 40) {
        s.phase = "lost";
        setPhase("lost");
        setScore(s.score);
        return;
      }

      for (const pipe of s.pipes) {
        pipe.x -= s.speed * dt;

        const heroX = 140;
        const heroW = 28;
        const heroH = 28;
        const pipeW = 70;

        // collision with pipe bodies if wrong gap chosen conceptually:
        // player flies through gap; hitting solid pipe = lose
        // Top pipe: 0 .. gapY
        // Bottom: gapY+gapH .. H
        if (heroX + heroW > pipe.x && heroX < pipe.x + pipeW) {
          const inGap = s.py > pipe.gapY && s.py + heroH < pipe.gapY + pipe.gapH;
          if (!inGap) {
            s.phase = "lost";
            setPhase("lost");
            setScore(s.score);
            return;
          }

          // score when mid-gap passed — must be target side?
          // Reward: if player is closer to the correct word pipe mouth
          if (!pipe.scored && heroX > pipe.x + pipeW / 2) {
            pipe.scored = true;
            const mid = pipe.gapY + pipe.gapH / 2;
            const choseTop = s.py + heroH / 2 < mid;
            const correctTop = pipe.wordTop.id === s.target.id;
            const correct = choseTop === correctTop;
            if (correct) {
              s.score += 100;
              s.passed += 1;
              setScore(s.score);
            } else {
              s.score = Math.max(0, s.score - 30);
              setScore(s.score);
            }
            if (s.passed >= s.goal) {
              s.phase = "won";
              const saved = parseInt(localStorage.getItem("unideutsch_best_pipeleap") || "0", 10);
              if (s.score > saved) localStorage.setItem("unideutsch_best_pipeleap", String(s.score));
              setPhase("won");
              return;
            }
          }
        }
      }

      draw(ctx, s);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phase, seed]);

  const flap = () => {
    flapRef.current = true;
  };

  const start = () => {
    setSeed((n) => n + 1);
    build();
  };

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-4">
      <div className="rounded-2xl overflow-hidden border-4 border-[#2d7a30] shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-[#1a1a2e] text-white text-sm font-bold">
          <span>🟢 Boru Zıplama</span>
          <span className="text-yellow-300">Hedef: {targetLabel || "—"}</span>
          <span>⭐ {score}</span>
          <span className="text-gray-400">En iyi: {best}</span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="w-full h-auto block bg-[#5c94fc] touch-none"
            onPointerDown={flap}
          />
          {phase === "ready" && (
            <Overlay
              title="Boru Zıplama"
              text="Zıplayarak uç! Her boru çiftinde hedef kelimenin yazdığı taraftan geç."
              button="Başla ▶"
              onClick={start}
            />
          )}
          {phase === "won" && (
            <Overlay title="Muhteşem! 🏆" text={`Skor: ${score}`} button="Tekrar Oyna" onClick={start} />
          )}
          {phase === "lost" && (
            <Overlay title="Boruya çarptın!" text={`Skor: ${score}`} button="Yeniden Dene" onClick={start} />
          )}
        </div>

        <div className="p-3 bg-[#1a1a2e] flex justify-center">
          <button
            type="button"
            onPointerDown={flap}
            className="flex-1 max-w-md bg-[#43b047] text-white font-bold py-4 rounded-xl text-lg active:scale-95"
          >
            ⬆ Zıpla / Uç
          </button>
        </div>
        <p className="text-center text-xs text-white/80 bg-[#1a1a2e] pb-3 px-4">
          Boşluk veya dokun = zıpla · Hedef kelimenin boru tarafından geç (üst veya alt)
        </p>
      </div>
    </div>
  );
};

function draw(
  ctx: CanvasRenderingContext2D,
  s: {
    py: number;
    pvy: number;
    anim: number;
    target: (typeof marioWords)[0];
    pipes: PipePair[];
    passed: number;
    goal: number;
  }
) {
  ctx.clearRect(0, 0, W, H);

  // parallax clouds
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  for (let i = 0; i < 6; i++) {
    const cx = ((i * 160 - s.anim * 8) % (W + 120)) - 40;
    ctx.beginPath();
    ctx.arc(cx, 50 + i * 15, 28, 0, Math.PI * 2);
    ctx.arc(cx + 25, 45, 22, 0, Math.PI * 2);
    ctx.arc(cx + 50, 52, 26, 0, Math.PI * 2);
    ctx.fill();
  }

  // ground strip
  ctx.fillStyle = "#c84c0c";
  ctx.fillRect(0, H - 24, W, 24);
  ctx.fillStyle = "#43b047";
  ctx.fillRect(0, H - 24, W, 8);

  // pipes
  for (const pipe of s.pipes) {
    if (pipe.x < -100 || pipe.x > W + 40) continue;
    const w = 70;
    // top
    ctx.fillStyle = "#43b047";
    ctx.fillRect(pipe.x + 6, 0, w - 12, pipe.gapY);
    ctx.fillStyle = "#2d7a30";
    ctx.fillRect(pipe.x, pipe.gapY - 22, w, 22);
    // bottom
    ctx.fillStyle = "#43b047";
    ctx.fillRect(pipe.x + 6, pipe.gapY + pipe.gapH, w - 12, H - 24 - (pipe.gapY + pipe.gapH));
    ctx.fillStyle = "#2d7a30";
    ctx.fillRect(pipe.x, pipe.gapY + pipe.gapH, w, 22);

    // word labels
    labelPipe(ctx, pipe.x + w / 2, pipe.gapY - 36, pipe.wordTop, pipe.wordTop.id === s.target.id);
    labelPipe(
      ctx,
      pipe.x + w / 2,
      pipe.gapY + pipe.gapH + 40,
      pipe.wordBot,
      pipe.wordBot.id === s.target.id
    );
  }

  // hero
  const x = 140;
  const y = s.py;
  const tilt = Math.max(-0.4, Math.min(0.5, s.pvy * 0.05));
  ctx.save();
  ctx.translate(x + 14, y + 14);
  ctx.rotate(tilt);
  ctx.fillStyle = "#e52521";
  ctx.fillRect(-12, -6, 24, 18);
  ctx.fillStyle = "#049cd8";
  ctx.fillRect(-10, 4, 20, 12);
  ctx.fillStyle = "#ffcc99";
  ctx.beginPath();
  ctx.arc(2, -10, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#e52521";
  ctx.fillRect(-10, -18, 20, 8);
  ctx.fillStyle = "#000";
  ctx.fillRect(4, -12, 3, 3);
  // cape flutter
  ctx.fillStyle = "#e52521";
  ctx.beginPath();
  ctx.moveTo(-12, 0);
  ctx.quadraticCurveTo(-28, Math.sin(s.anim * 4) * 8, -18, 18);
  ctx.lineTo(-8, 10);
  ctx.fill();
  ctx.restore();

  // HUD
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.fillRect(8, 8, 260, 40);
  ctx.fillStyle = "#fbd000";
  ctx.font = "bold 14px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`Hedef: ${s.target.de} ${s.target.emoji}  (${s.passed}/${s.goal})`, 16, 34);
}

function labelPipe(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  word: (typeof marioWords)[0],
  highlight: boolean
) {
  ctx.fillStyle = highlight ? "#fbd000" : "rgba(0,0,0,0.55)";
  const tw = Math.max(56, word.de.length * 9);
  ctx.fillRect(x - tw / 2, y - 14, tw, 28);
  ctx.fillStyle = highlight ? "#1a1a2e" : "#fff";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(word.de, x, y + 5);
}

function Overlay({
  title,
  text,
  button,
  onClick,
}: {
  title: string;
  text: string;
  button: string;
  onClick: () => void;
}) {
  return (
    <div className="absolute inset-0 bg-black/55 flex items-center justify-center p-4">
      <div className="bg-[#1a1a2e] text-white rounded-2xl p-6 max-w-sm text-center border-4 border-yellow-400">
        <p className="text-2xl font-bold mb-2">{title}</p>
        <p className="text-sm text-gray-300 mb-5">{text}</p>
        <button type="button" onClick={onClick} className="bg-[#43b047] px-8 py-3 rounded-xl font-bold text-lg">
          {button}
        </button>
      </div>
    </div>
  );
}

export default PipeLeapGame;
