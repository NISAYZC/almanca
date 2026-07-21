import { useCallback, useEffect, useRef, useState } from "react";
import { marioWords } from "../../data/mario-games";

const W = 800;
const H = 420;
const GRAVITY = 0.5;
const JUMP = -12;
const MOVE = 4.5;

type Phase = "ready" | "playing" | "won" | "lost";

interface Platform {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "ground" | "brick" | "pipe";
}

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
  minX: number;
  maxX: number;
}

const PlatformAdventureGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [collected, setCollected] = useState(0);
  const [need, setNeed] = useState(0);
  const [seed, setSeed] = useState(0);
  const keys = useRef({ left: false, right: false, jump: false });

  const state = useRef({
    phase: "ready" as Phase,
    camX: 0,
    px: 60,
    py: 300,
    pvx: 0,
    pvy: 0,
    onGround: false,
    anim: 0,
    facing: 1,
    score: 0,
    collected: 0,
    need: 0,
    platforms: [] as Platform[],
    coins: [] as Coin[],
    enemies: [] as Enemy[],
    flagX: 0,
    invuln: 0,
    lives: 3,
  });

  const best = localStorage.getItem("unideutsch_best_platform") || "0";

  const buildLevel = useCallback(() => {
    const platforms: Platform[] = [
      { x: 0, y: 380, w: 3200, h: 40, type: "ground" },
      { x: 220, y: 300, w: 100, h: 20, type: "brick" },
      { x: 380, y: 240, w: 100, h: 20, type: "brick" },
      { x: 540, y: 180, w: 120, h: 20, type: "brick" },
      { x: 720, y: 260, w: 90, h: 20, type: "brick" },
      { x: 900, y: 200, w: 110, h: 20, type: "brick" },
      { x: 1100, y: 300, w: 80, h: 80, type: "pipe" },
      { x: 1280, y: 220, w: 100, h: 20, type: "brick" },
      { x: 1480, y: 160, w: 100, h: 20, type: "brick" },
      { x: 1680, y: 280, w: 120, h: 20, type: "brick" },
      { x: 1900, y: 200, w: 100, h: 20, type: "brick" },
      { x: 2100, y: 300, w: 90, h: 80, type: "pipe" },
      { x: 2300, y: 240, w: 140, h: 20, type: "brick" },
      { x: 2550, y: 180, w: 100, h: 20, type: "brick" },
    ];

    const words = [...marioWords].sort(() => Math.random() - 0.5).slice(0, 10);
    const coins: Coin[] = words.map((word, i) => {
      const p = platforms[2 + (i % (platforms.length - 2))];
      return {
        x: p.x + p.w / 2 - 12 + (i % 3) * 20,
        y: p.y - 40,
        word,
        taken: false,
        bob: Math.random() * 6,
      };
    });

    const enemies: Enemy[] = [
      { x: 400, y: 352, w: 30, h: 28, vx: 1.4, minX: 320, maxX: 700 },
      { x: 1000, y: 352, w: 30, h: 28, vx: -1.6, minX: 900, maxX: 1250 },
      { x: 1600, y: 352, w: 30, h: 28, vx: 1.5, minX: 1500, maxX: 1850 },
      { x: 2200, y: 352, w: 30, h: 28, vx: -1.3, minX: 2150, maxX: 2500 },
    ];

    state.current = {
      phase: "playing",
      camX: 0,
      px: 60,
      py: 300,
      pvx: 0,
      pvy: 0,
      onGround: false,
      anim: 0,
      facing: 1,
      score: 0,
      collected: 0,
      need: coins.length,
      platforms,
      coins,
      enemies,
      flagX: 2900,
      invuln: 0,
      lives: 3,
    };
    setNeed(coins.length);
    setCollected(0);
    setScore(0);
    setPhase("playing");
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (["ArrowLeft", "KeyA"].includes(e.code)) {
        e.preventDefault();
        keys.current.left = true;
      }
      if (["ArrowRight", "KeyD"].includes(e.code)) {
        e.preventDefault();
        keys.current.right = true;
      }
      if (["Space", "ArrowUp", "KeyW"].includes(e.code)) {
        e.preventDefault();
        keys.current.jump = true;
      }
    };
    const up = (e: KeyboardEvent) => {
      if (["ArrowLeft", "KeyA"].includes(e.code)) keys.current.left = false;
      if (["ArrowRight", "KeyD"].includes(e.code)) keys.current.right = false;
      if (["Space", "ArrowUp", "KeyW"].includes(e.code)) keys.current.jump = false;
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

      s.anim += 0.2 * dt;
      if (s.invuln > 0) s.invuln -= dt;

      s.pvx = 0;
      if (keys.current.left) {
        s.pvx = -MOVE;
        s.facing = -1;
      }
      if (keys.current.right) {
        s.pvx = MOVE;
        s.facing = 1;
      }
      if (keys.current.jump && s.onGround) {
        s.pvy = JUMP;
        s.onGround = false;
      }

      s.pvy += GRAVITY * dt;
      s.px += s.pvx * dt;
      s.py += s.pvy * dt;
      if (s.px < 0) s.px = 0;

      // platform collision
      s.onGround = false;
      const pw = 28;
      const ph = 40;
      for (const p of s.platforms) {
        if (
          s.px + pw > p.x &&
          s.px < p.x + p.w &&
          s.py + ph > p.y &&
          s.py + ph < p.y + p.h + 12 &&
          s.pvy >= 0
        ) {
          s.py = p.y - ph;
          s.pvy = 0;
          s.onGround = true;
        }
      }

      if (s.py > H + 40) {
        s.lives -= 1;
        if (s.lives <= 0) {
          s.phase = "lost";
          setPhase("lost");
          setScore(s.score);
          return;
        }
        s.px = 60;
        s.py = 280;
        s.pvy = 0;
        s.invuln = 60;
      }

      s.camX = Math.max(0, Math.min(s.px - 160, 3200 - W));

      // enemies
      for (const en of s.enemies) {
        en.x += en.vx * dt;
        if (en.x < en.minX || en.x > en.maxX) en.vx *= -1;

        if (
          s.invuln <= 0 &&
          s.px + pw > en.x &&
          s.px < en.x + en.w &&
          s.py + ph > en.y &&
          s.py < en.y + en.h
        ) {
          if (s.pvy > 0 && s.py + ph - 8 < en.y + 12) {
            en.x = en.minX;
            s.pvy = JUMP * 0.55;
            s.score += 40;
            setScore(s.score);
          } else {
            s.lives -= 1;
            s.invuln = 80;
            s.pvy = JUMP * 0.4;
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
        c.bob += 0.1 * dt;
        const cy = c.y + Math.sin(c.bob) * 5;
        if (s.px + pw > c.x && s.px < c.x + 26 && s.py + ph > cy && s.py < cy + 26) {
          c.taken = true;
          s.collected += 1;
          s.score += 100;
          setCollected(s.collected);
          setScore(s.score);
        }
      }

      // win: all coins + reach flag
      if (s.collected >= s.need && s.px >= s.flagX - 20) {
        s.phase = "won";
        const saved = parseInt(localStorage.getItem("unideutsch_best_platform") || "0", 10);
        if (s.score > saved) localStorage.setItem("unideutsch_best_platform", String(s.score));
        setPhase("won");
        setScore(s.score);
        return;
      }

      draw(ctx, s);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phase, seed]);

  const start = () => {
    setSeed((n) => n + 1);
    buildLevel();
  };

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-4">
      <div className="rounded-2xl overflow-hidden border-4 border-[#5c3a1e] shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-[#1a1a2e] text-white text-sm font-bold">
          <span>🧱 Platform Macerası</span>
          <span className="text-yellow-300">
            Kelime: {collected}/{need}
          </span>
          <span>⭐ {score}</span>
          <span className="text-gray-400">En iyi: {best}</span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="w-full h-auto block bg-[#5c94fc] touch-none"
          />
          {phase === "ready" && (
            <Overlay
              title="Platform Macerası"
              text="Sol-sağ ilerle, zıpla, tüm Almanca kelime altınlarını topla ve bayrağa ulaş!"
              button="Başla ▶"
              onClick={start}
            />
          )}
          {phase === "won" && (
            <Overlay title="Seviye tamam! 🏁" text={`Skor: ${score}`} button="Tekrar Oyna" onClick={start} />
          )}
          {phase === "lost" && (
            <Overlay title="Düştün!" text={`Skor: ${score}`} button="Yeniden Dene" onClick={start} />
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-[#1a1a2e]">
          <button
            type="button"
            onPointerDown={() => {
              keys.current.left = true;
            }}
            onPointerUp={() => {
              keys.current.left = false;
            }}
            onPointerLeave={() => {
              keys.current.left = false;
            }}
            className="bg-[#049cd8] text-white font-bold py-4 rounded-xl text-xl active:scale-95"
          >
            ◀
          </button>
          <button
            type="button"
            onPointerDown={() => {
              keys.current.jump = true;
            }}
            onPointerUp={() => {
              keys.current.jump = false;
            }}
            onPointerLeave={() => {
              keys.current.jump = false;
            }}
            className="bg-[#e52521] text-white font-bold py-4 rounded-xl text-xl active:scale-95"
          >
            ⬆ Zıpla
          </button>
          <button
            type="button"
            onPointerDown={() => {
              keys.current.right = true;
            }}
            onPointerUp={() => {
              keys.current.right = false;
            }}
            onPointerLeave={() => {
              keys.current.right = false;
            }}
            className="bg-[#049cd8] text-white font-bold py-4 rounded-xl text-xl active:scale-95"
          >
            ▶
          </button>
        </div>
        <p className="text-center text-xs text-white/80 bg-[#1a1a2e] pb-3">
          Ok tuşları / A D + Boşluk · Tüm kelimeleri topla, sonra bayrağa koş
        </p>
      </div>
    </div>
  );
};

function draw(
  ctx: CanvasRenderingContext2D,
  s: {
    camX: number;
    px: number;
    py: number;
    anim: number;
    facing: number;
    onGround: boolean;
    invuln: number;
    platforms: Platform[];
    coins: Coin[];
    enemies: Enemy[];
    flagX: number;
    collected: number;
    need: number;
    lives: number;
  }
) {
  const cam = s.camX;
  ctx.clearRect(0, 0, W, H);

  // clouds
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  for (let i = 0; i < 10; i++) {
    const cx = ((i * 180 - cam * 0.25) % (W + 160)) - 40;
    cloud(ctx, cx, 30 + (i % 4) * 22, 36);
  }

  // platforms
  for (const p of s.platforms) {
    const x = p.x - cam;
    if (x + p.w < -20 || x > W + 20) continue;
    if (p.type === "ground") {
      ctx.fillStyle = "#c84c0c";
      ctx.fillRect(x, p.y, p.w, p.h);
      ctx.fillStyle = "#43b047";
      ctx.fillRect(x, p.y, p.w, 8);
    } else if (p.type === "brick") {
      ctx.fillStyle = "#c84c0c";
      ctx.fillRect(x, p.y, p.w, p.h);
      ctx.strokeStyle = "#8b3a0a";
      ctx.strokeRect(x, p.y, p.w, p.h);
      for (let i = 0; i < p.w; i += 20) {
        ctx.beginPath();
        ctx.moveTo(x + i, p.y);
        ctx.lineTo(x + i, p.y + p.h);
        ctx.stroke();
      }
    } else {
      // pipe
      ctx.fillStyle = "#43b047";
      ctx.fillRect(x + 6, p.y + 14, p.w - 12, p.h - 14);
      ctx.fillStyle = "#2d7a30";
      ctx.fillRect(x, p.y, p.w, 18);
      ctx.fillStyle = "#5ed15f";
      ctx.fillRect(x + 8, p.y + 3, 10, 12);
    }
  }

  // coins with words
  for (const c of s.coins) {
    if (c.taken) continue;
    const x = c.x - cam;
    const y = c.y + Math.sin(c.bob) * 5;
    if (x < -30 || x > W + 30) continue;
    ctx.fillStyle = "#fbd000";
    ctx.beginPath();
    ctx.ellipse(x + 12, y + 12, 11, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#1a1a2e";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(c.word.de, x + 12, y - 4);
    ctx.font = "14px sans-serif";
    ctx.fillText(c.word.emoji, x + 12, y + 18);
  }

  // enemies
  for (const en of s.enemies) {
    const x = en.x - cam;
    const wob = Math.sin(s.anim * 3 + en.x) * 2;
    ctx.fillStyle = "#8B4513";
    ctx.beginPath();
    ctx.ellipse(x + 15, en.y + 12 + wob, 15, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillRect(x + 8, en.y + 6, 5, 5);
    ctx.fillRect(x + 18, en.y + 6, 5, 5);
    ctx.fillStyle = "#000";
    ctx.fillRect(x + 10, en.y + 8, 2, 2);
    ctx.fillRect(x + 20, en.y + 8, 2, 2);
  }

  // flag
  const fx = s.flagX - cam;
  if (fx > -50 && fx < W + 50) {
    ctx.fillStyle = "#eee";
    ctx.fillRect(fx, 200, 6, 180);
    ctx.fillStyle = s.collected >= s.need ? "#e52521" : "#666";
    ctx.beginPath();
    ctx.moveTo(fx + 6, 200);
    ctx.lineTo(fx + 48, 220);
    ctx.lineTo(fx + 6, 240);
    ctx.fill();
    if (s.collected < s.need) {
      ctx.fillStyle = "#fff";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("Önce kelimeleri topla!", fx - 40, 190);
    }
  }

  // hero
  if (s.invuln <= 0 || Math.floor(s.anim * 5) % 2 === 0) {
    const x = s.px - cam;
    const y = s.py;
    const leg = s.onGround ? Math.sin(s.anim * 4) * 4 : 0;
    ctx.save();
    if (s.facing < 0) {
      ctx.translate(x + 28, 0);
      ctx.scale(-1, 1);
      ctx.translate(-x, 0);
    }
    ctx.fillStyle = "#e52521";
    ctx.fillRect(x + 6, y + 14, 22, 16);
    ctx.fillStyle = "#049cd8";
    ctx.fillRect(x + 8, y + 22, 18, 12);
    ctx.fillStyle = "#ffcc99";
    ctx.beginPath();
    ctx.arc(x + 17, y + 10, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e52521";
    ctx.fillRect(x + 6, y + 2, 22, 8);
    ctx.fillStyle = "#000";
    ctx.fillRect(x + 20, y + 8, 3, 3);
    ctx.fillStyle = "#049cd8";
    ctx.fillRect(x + 8, y + 34, 7, 8 + leg);
    ctx.fillRect(x + 18, y + 34, 7, 8 - leg);
    ctx.fillStyle = "#5c3a1e";
    ctx.fillRect(x + 6, y + 40 + leg, 10, 4);
    ctx.fillRect(x + 17, y + 40 - leg, 10, 4);
    ctx.restore();
  }

  // lives
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.fillRect(8, 8, 100, 28);
  ctx.fillStyle = "#e52521";
  ctx.font = "bold 14px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`❤️ ${s.lives}`, 16, 28);
}

function cloud(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r * 0.5, 0, Math.PI * 2);
  ctx.arc(x + r * 0.45, y - 5, r * 0.4, 0, Math.PI * 2);
  ctx.arc(x + r * 0.9, y, r * 0.48, 0, Math.PI * 2);
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
      <div className="bg-[#1a1a2e] text-white rounded-2xl p-6 max-w-sm text-center border-4 border-yellow-400">
        <p className="text-2xl font-bold mb-2">{title}</p>
        <p className="text-sm text-gray-300 mb-5">{text}</p>
        <button type="button" onClick={onClick} className="bg-[#e52521] px-8 py-3 rounded-xl font-bold text-lg">
          {button}
        </button>
      </div>
    </div>
  );
}

export default PlatformAdventureGame;
