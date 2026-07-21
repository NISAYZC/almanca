import { useCallback, useEffect, useRef, useState } from "react";
import { marioWords } from "../../data/mario-games";

const W = 800;
const H = 420;
const GROUND = H - 56;
const GRAVITY = 0.55;
const JUMP = -11.5;
const RUN_SPEED = 4.2;

type Phase = "ready" | "playing" | "won" | "lost";

interface Coin {
  x: number;
  y: number;
  word: (typeof marioWords)[0];
  taken: boolean;
  bob: number;
}

interface Enemy {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

const CoinRunnerGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [targetLabel, setTargetLabel] = useState("");
  const [seed, setSeed] = useState(0);
  const keys = useRef({ jump: false });
  const state = useRef({
    phase: "ready" as Phase,
    camX: 0,
    px: 80,
    py: GROUND - 40,
    pvy: 0,
    onGround: true,
    anim: 0,
    score: 0,
    lives: 3,
    target: marioWords[0],
    coins: [] as Coin[],
    enemies: [] as Enemy[],
    particles: [] as Particle[],
    flagX: 2400,
    invuln: 0,
    finish: false,
  });

  const best = localStorage.getItem("unideutsch_best_coinrunner") || "0";

  const buildLevel = useCallback(() => {
    const target = marioWords[Math.floor(Math.random() * marioWords.length)];
    const coins: Coin[] = [];
    const enemies: Enemy[] = [];

    for (let i = 0; i < 18; i++) {
      const x = 280 + i * 120 + Math.random() * 40;
      const y = GROUND - 70 - (i % 3) * 35 - Math.random() * 20;
      const word =
        Math.random() < 0.45
          ? target
          : marioWords[Math.floor(Math.random() * marioWords.length)];
      coins.push({ x, y, word, taken: false, bob: Math.random() * Math.PI * 2 });
    }

    for (let i = 0; i < 6; i++) {
      enemies.push({
        x: 400 + i * 320,
        y: GROUND - 28,
        w: 32,
        h: 28,
        vx: -1.2 - Math.random() * 0.6,
      });
    }

    state.current = {
      ...state.current,
      phase: "playing",
      camX: 0,
      px: 80,
      py: GROUND - 40,
      pvy: 0,
      onGround: true,
      anim: 0,
      score: 0,
      lives: 3,
      target,
      coins,
      enemies,
      particles: [],
      flagX: 2600,
      invuln: 0,
      finish: false,
    };
    setTargetLabel(`${target.de} (${target.tr})`);
    setScore(0);
    setLives(3);
    setPhase("playing");
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
        e.preventDefault();
        keys.current.jump = true;
      }
    };
    const up = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
        keys.current.jump = false;
      }
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
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

      s.anim += 0.18 * dt;
      if (s.invuln > 0) s.invuln -= dt;

      // jump
      if (keys.current.jump && s.onGround) {
        s.pvy = JUMP;
        s.onGround = false;
      }

      s.px += RUN_SPEED * dt;
      s.pvy += GRAVITY * dt;
      s.py += s.pvy * dt;

      if (s.py >= GROUND - 40) {
        s.py = GROUND - 40;
        s.pvy = 0;
        s.onGround = true;
      }

      s.camX = Math.max(0, s.px - 140);

      // enemies
      for (const en of s.enemies) {
        en.x += en.vx * dt;
        if (en.x < s.camX - 40) {
          en.x = s.camX + W + 80 + Math.random() * 200;
          en.vx = -1.2 - Math.random();
        }

        if (
          s.invuln <= 0 &&
          s.px + 28 > en.x &&
          s.px < en.x + en.w &&
          s.py + 40 > en.y &&
          s.py < en.y + en.h
        ) {
          // stomp
          if (s.pvy > 0 && s.py + 30 < en.y + 10) {
            en.x = s.camX + W + 200;
            s.pvy = JUMP * 0.65;
            s.score += 50;
            burst(s, en.x + 16, en.y, "#8B4513");
          } else {
            s.lives -= 1;
            s.invuln = 90;
            s.pvy = JUMP * 0.5;
            setLives(s.lives);
            if (s.lives <= 0) {
              s.phase = "lost";
              setPhase("lost");
              setScore(s.score);
              return;
            }
          }
        }
      }

      // coins
      for (const c of s.coins) {
        if (c.taken) continue;
        c.bob += 0.12 * dt;
        const cy = c.y + Math.sin(c.bob) * 6;
        if (
          s.px + 30 > c.x &&
          s.px < c.x + 28 &&
          s.py + 40 > cy &&
          s.py < cy + 28
        ) {
          c.taken = true;
          if (c.word.id === s.target.id) {
            s.score += 100;
            burst(s, c.x, cy, "#fbd000");
          } else {
            s.score = Math.max(0, s.score - 20);
            burst(s, c.x, cy, "#888");
          }
          setScore(s.score);
        }
      }

      // particles
      s.particles = s.particles
        .map((p) => ({
          ...p,
          x: p.x + p.vx * dt,
          y: p.y + p.vy * dt,
          vy: p.vy + 0.2 * dt,
          life: p.life - dt,
        }))
        .filter((p) => p.life > 0);

      // flag
      if (s.px >= s.flagX) {
        s.phase = "won";
        s.finish = true;
        const pct = Math.min(100, s.score);
        const saved = parseInt(localStorage.getItem("unideutsch_best_coinrunner") || "0", 10);
        if (pct > saved) localStorage.setItem("unideutsch_best_coinrunner", String(pct));
        setScore(s.score);
        setPhase("won");
        return;
      }

      draw(ctx, s);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phase, seed]);

  const jump = () => {
    keys.current.jump = true;
    setTimeout(() => {
      keys.current.jump = false;
    }, 120);
  };

  const start = () => {
    setSeed((n) => n + 1);
    buildLevel();
  };

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-4">
      <div className="rounded-2xl overflow-hidden border-4 border-[#5c3a1e] shadow-xl bg-[#049cd8]">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-[#1a1a2e] text-white text-sm font-bold">
          <span>🏃 Kelime Koşusu</span>
          <span className="text-yellow-300">Hedef: {targetLabel || "—"}</span>
          <span>⭐ {score}</span>
          <span>❤️ {lives}</span>
          <span className="text-gray-400">En iyi: {best}</span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="w-full h-auto block bg-[#5c94fc] touch-none"
            onPointerDown={jump}
          />

          {phase === "ready" && (
            <Overlay
              title="Kelime Koşusu"
              text="Otomatik koşarsın — zıpla, düşmanlardan kaç, hedef kelimenin altınlarını topla!"
              button="Başla ▶"
              onClick={start}
            />
          )}
          {phase === "won" && (
            <Overlay
              title="Bayrağa ulaştın! 🏁"
              text={`Skorun: ${score} — Süper!`}
              button="Tekrar Oyna"
              onClick={start}
            />
          )}
          {phase === "lost" && (
            <Overlay
              title="Canlar bitti!"
              text={`Skor: ${score}`}
              button="Yeniden Dene"
              onClick={start}
            />
          )}
        </div>

        <div className="flex gap-3 p-3 bg-[#1a1a2e] justify-center">
          <button
            type="button"
            onPointerDown={jump}
            className="flex-1 max-w-xs bg-[#e52521] text-white font-bold py-4 rounded-xl text-lg active:scale-95 transition-transform"
          >
            ⬆ Zıpla
          </button>
        </div>
        <p className="text-center text-xs text-white/80 bg-[#1a1a2e] pb-3 px-4">
          Boşluk / ↑ / dokun = zıpla · Sadece hedef kelimeyi topla
        </p>
      </div>
    </div>
  );
};

function burst(
  s: { particles: Particle[] },
  x: number,
  y: number,
  color: string
) {
  for (let i = 0; i < 10; i++) {
    s.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.8) * 6,
      life: 20 + Math.random() * 15,
      color,
    });
  }
}

function draw(
  ctx: CanvasRenderingContext2D,
  s: {
    camX: number;
    px: number;
    py: number;
    anim: number;
    onGround: boolean;
    invuln: number;
    coins: Coin[];
    enemies: Enemy[];
    particles: Particle[];
    flagX: number;
    target: (typeof marioWords)[0];
  }
) {
  const cam = s.camX;
  ctx.clearRect(0, 0, W, H);

  // sky gradient already via canvas bg; clouds
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  for (let i = 0; i < 8; i++) {
    const cx = ((i * 220 - cam * 0.3) % (W + 200)) - 50;
    const cy = 40 + (i % 3) * 28;
    roundCloud(ctx, cx, cy, 40 + (i % 2) * 10);
  }

  // hills
  ctx.fillStyle = "#43b047";
  for (let i = 0; i < 6; i++) {
    const hx = ((i * 280 - cam * 0.5) % (W + 300)) - 80;
    ctx.beginPath();
    ctx.ellipse(hx, GROUND + 10, 90, 50, 0, Math.PI, 0);
    ctx.fill();
  }

  // ground
  ctx.fillStyle = "#c84c0c";
  ctx.fillRect(0, GROUND, W, H - GROUND);
  ctx.fillStyle = "#43b047";
  ctx.fillRect(0, GROUND, W, 10);
  // bricks pattern
  ctx.strokeStyle = "#8b3a0a";
  ctx.lineWidth = 1;
  for (let x = -((cam / 2) % 40); x < W; x += 40) {
    ctx.strokeRect(x, GROUND + 14, 40, 20);
    ctx.strokeRect(x + 20, GROUND + 34, 40, 20);
  }

  // pipes
  for (let i = 0; i < 5; i++) {
    const px = 500 + i * 480 - cam;
    drawPipe(ctx, px, GROUND - 70, 50, 70);
  }

  // question blocks
  for (let i = 0; i < 8; i++) {
    const bx = 350 + i * 280 - cam;
    const by = GROUND - 130;
    ctx.fillStyle = "#fbd000";
    ctx.fillRect(bx, by, 32, 32);
    ctx.strokeStyle = "#c47800";
    ctx.lineWidth = 3;
    ctx.strokeRect(bx, by, 32, 32);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText("?", bx + 8, by + 24);
  }

  // coins
  for (const c of s.coins) {
    if (c.taken) continue;
    const x = c.x - cam;
    const y = c.y + Math.sin(c.bob) * 6;
    if (x < -40 || x > W + 40) continue;
    const isTarget = c.word.id === s.target.id;
    ctx.save();
    ctx.translate(x + 14, y + 14);
    ctx.rotate(Math.sin(c.bob * 2) * 0.2);
    ctx.fillStyle = isTarget ? "#fbd000" : "#aaa";
    ctx.beginPath();
    ctx.ellipse(0, 0, 12, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff8";
    ctx.fillRect(-3, -8, 4, 10);
    ctx.restore();
    ctx.fillStyle = "#1a1a2e";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(c.word.de, x + 14, y - 6);
  }

  // enemies (goomba-like)
  for (const en of s.enemies) {
    const x = en.x - cam;
    if (x < -40 || x > W + 40) continue;
    const wobble = Math.sin(s.anim * 2 + en.x) * 2;
    ctx.fillStyle = "#8B4513";
    ctx.beginPath();
    ctx.ellipse(x + 16, en.y + 14 + wobble, 16, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#5c2e0a";
    ctx.fillRect(x + 4, en.y + 22, 8, 6);
    ctx.fillRect(x + 20, en.y + 22, 8, 6);
    ctx.fillStyle = "#fff";
    ctx.fillRect(x + 8, en.y + 8, 6, 6);
    ctx.fillRect(x + 18, en.y + 8, 6, 6);
    ctx.fillStyle = "#000";
    ctx.fillRect(x + 10, en.y + 10, 3, 3);
    ctx.fillRect(x + 20, en.y + 10, 3, 3);
  }

  // flag
  const fx = s.flagX - cam;
  if (fx > -40 && fx < W + 40) {
    ctx.fillStyle = "#ddd";
    ctx.fillRect(fx, GROUND - 160, 6, 160);
    ctx.fillStyle = "#e52521";
    ctx.beginPath();
    ctx.moveTo(fx + 6, GROUND - 160);
    ctx.lineTo(fx + 50, GROUND - 140);
    ctx.lineTo(fx + 6, GROUND - 120);
    ctx.fill();
    ctx.fillStyle = "#fbd000";
    ctx.beginPath();
    ctx.arc(fx + 3, GROUND - 165, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  // particles
  for (const p of s.particles) {
    ctx.globalAlpha = Math.min(1, p.life / 10);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - cam, p.y, 5, 5);
    ctx.globalAlpha = 1;
  }

  // player
  if (s.invuln <= 0 || Math.floor(s.anim * 4) % 2 === 0) {
    drawHero(ctx, s.px - cam, s.py, s.anim, !s.onGround);
  }

  // HUD strip hint
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.fillRect(8, 8, 220, 36);
  ctx.fillStyle = "#fbd000";
  ctx.font = "bold 14px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`Topla: ${s.target.de} ${s.target.emoji}`, 16, 32);
}

function drawHero(ctx: CanvasRenderingContext2D, x: number, y: number, anim: number, jumping: boolean) {
  const leg = jumping ? 0 : Math.sin(anim * 3) * 4;
  // body
  ctx.fillStyle = "#e52521";
  ctx.fillRect(x + 6, y + 14, 22, 16);
  // overalls
  ctx.fillStyle = "#049cd8";
  ctx.fillRect(x + 8, y + 22, 18, 12);
  // head
  ctx.fillStyle = "#ffcc99";
  ctx.beginPath();
  ctx.arc(x + 17, y + 10, 10, 0, Math.PI * 2);
  ctx.fill();
  // hat
  ctx.fillStyle = "#e52521";
  ctx.fillRect(x + 6, y + 2, 22, 8);
  ctx.fillRect(x + 10, y - 2, 14, 6);
  // eyes
  ctx.fillStyle = "#000";
  ctx.fillRect(x + 20, y + 8, 3, 3);
  // legs
  ctx.fillStyle = "#049cd8";
  ctx.fillRect(x + 8, y + 34, 7, 8 + leg);
  ctx.fillRect(x + 18, y + 34, 7, 8 - leg);
  // shoes
  ctx.fillStyle = "#5c3a1e";
  ctx.fillRect(x + 6, y + 40 + leg, 10, 4);
  ctx.fillRect(x + 17, y + 40 - leg, 10, 4);
}

function drawPipe(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  ctx.fillStyle = "#43b047";
  ctx.fillRect(x + 4, y + 16, w - 8, h - 16);
  ctx.fillStyle = "#2d7a30";
  ctx.fillRect(x, y, w, 20);
  ctx.fillStyle = "#5ed15f";
  ctx.fillRect(x + 6, y + 4, 8, 12);
}

function roundCloud(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r * 0.55, 0, Math.PI * 2);
  ctx.arc(x + r * 0.5, y - 4, r * 0.45, 0, Math.PI * 2);
  ctx.arc(x + r, y, r * 0.5, 0, Math.PI * 2);
  ctx.fill();
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
      <div className="bg-[#1a1a2e] text-white rounded-2xl p-6 max-w-sm text-center border-4 border-yellow-400 shadow-2xl">
        <p className="text-2xl font-bold mb-2">{title}</p>
        <p className="text-sm text-gray-300 mb-5">{text}</p>
        <button
          type="button"
          onClick={onClick}
          className="bg-[#e52521] hover:bg-red-600 px-8 py-3 rounded-xl font-bold text-lg"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default CoinRunnerGame;
