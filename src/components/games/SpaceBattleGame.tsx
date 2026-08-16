import { useCallback, useEffect, useRef, useState } from "react";
import { marioWords } from "../../data/mario-games";

const W = 800;
const H = 480;
const PLAYER_SPEED = 5.5;
const BULLET_SPEED = 9;
const ENEMY_SPEED = 1.8;

type Phase = "ready" | "playing" | "won" | "lost";

interface Bullet {
  x: number;
  y: number;
}

interface Enemy {
  x: number;
  y: number;
  word: (typeof marioWords)[0];
  w: number;
  h: number;
}

interface Star {
  x: number;
  y: number;
  speed: number;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

const SpaceBattleGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [targetLabel, setTargetLabel] = useState("");
  const [seed, setSeed] = useState(0);

  const keysRef = useRef({ left: false, right: false, shoot: false });
  const shootCooldownRef = useRef(0);

  const state = useRef({
    phase: "ready" as Phase,
    px: W / 2 - 20,
    bullets: [] as Bullet[],
    enemies: [] as Enemy[],
    particles: [] as Particle[],
    stars: [] as Star[],
    score: 0,
    lives: 3,
    target: marioWords[0],
    spawnTimer: 0,
    kills: 0,
    goal: 10,
    anim: 0,
  });

  const best = localStorage.getItem("unideutsch_best_spacebattle") || "0";

  const initStars = () => {
    const stars: Star[] = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        speed: 0.5 + Math.random() * 2,
        size: Math.random() > 0.7 ? 2 : 1,
      });
    }
    return stars;
  };

  const pickWord = (excludeId?: string) => {
    let word = marioWords[Math.floor(Math.random() * marioWords.length)];
    while (excludeId && word.id === excludeId) {
      word = marioWords[Math.floor(Math.random() * marioWords.length)];
    }
    return word;
  };

  const spawnEnemy = (target: (typeof marioWords)[0]) => {
    const showCorrect = Math.random() > 0.35;
    const word = showCorrect ? target : pickWord(target.id);
    const textW = Math.max(70, word.de.length * 10 + 40);
    return {
      x: 40 + Math.random() * (W - textW - 80),
      y: -50,
      word,
      w: textW,
      h: 36,
    } satisfies Enemy;
  };

  const build = useCallback(() => {
    const target = pickWord();
    state.current = {
      phase: "playing",
      px: W / 2 - 20,
      bullets: [],
      enemies: [],
      particles: [],
      stars: initStars(),
      score: 0,
      lives: 3,
      target,
      spawnTimer: 0,
      kills: 0,
      goal: 10,
      anim: 0,
    };
    setTargetLabel(`${target.tr} → ${target.de} ${target.emoji}`);
    setScore(0);
    setLives(3);
    setPhase("playing");
  }, []);

  const addExplosion = (x: number, y: number, color: string) => {
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      state.current.particles.push({
        x,
        y,
        vx: Math.cos(angle) * (2 + Math.random() * 3),
        vy: Math.sin(angle) * (2 + Math.random() * 3),
        life: 30 + Math.random() * 20,
        color,
      });
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") keysRef.current.left = true;
      if (e.code === "ArrowRight" || e.code === "KeyD") keysRef.current.right = true;
      if (e.code === "Space" || e.code === "KeyW") {
        e.preventDefault();
        keysRef.current.shoot = true;
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") keysRef.current.left = false;
      if (e.code === "ArrowRight" || e.code === "KeyD") keysRef.current.right = false;
      if (e.code === "Space" || e.code === "KeyW") keysRef.current.shoot = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
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

      s.anim += 0.05 * dt;

      // Stars
      for (const star of s.stars) {
        star.y += star.speed * dt;
        if (star.y > H) {
          star.y = 0;
          star.x = Math.random() * W;
        }
      }

      // Player movement
      if (keysRef.current.left) s.px -= PLAYER_SPEED * dt;
      if (keysRef.current.right) s.px += PLAYER_SPEED * dt;
      s.px = Math.max(10, Math.min(W - 50, s.px));

      // Shooting
      shootCooldownRef.current -= dt;
      if (keysRef.current.shoot && shootCooldownRef.current <= 0) {
        s.bullets.push({ x: s.px + 18, y: H - 70 });
        shootCooldownRef.current = 12;
      }

      // Bullets
      for (const b of s.bullets) b.y -= BULLET_SPEED * dt;
      s.bullets = s.bullets.filter((b) => b.y > -10);

      // Spawn enemies
      s.spawnTimer -= dt;
      if (s.spawnTimer <= 0) {
        s.enemies.push(spawnEnemy(s.target));
        s.spawnTimer = 55 + Math.random() * 35;
      }

      // Enemies
      for (const e of s.enemies) e.y += ENEMY_SPEED * dt;

      // Bullet hits
      for (let bi = s.bullets.length - 1; bi >= 0; bi--) {
        const b = s.bullets[bi];
        for (let ei = s.enemies.length - 1; ei >= 0; ei--) {
          const e = s.enemies[ei];
          if (
            b.x > e.x &&
            b.x < e.x + e.w &&
            b.y > e.y &&
            b.y < e.y + e.h
          ) {
            const correct = e.word.id === s.target.id;
            s.bullets.splice(bi, 1);
            s.enemies.splice(ei, 1);
            addExplosion(e.x + e.w / 2, e.y + e.h / 2, correct ? "#43b047" : "#e52521");

            if (correct) {
              s.score += 150;
              s.kills += 1;
              setScore(s.score);
              if (s.kills >= s.goal) {
                s.phase = "won";
                const saved = parseInt(best, 10);
                if (s.score > saved) {
                  localStorage.setItem("unideutsch_best_spacebattle", String(s.score));
                }
                setPhase("won");
                return;
              }
            } else {
              s.score = Math.max(0, s.score - 50);
              s.lives -= 1;
              setScore(s.score);
              setLives(s.lives);
              if (s.lives <= 0) {
                s.phase = "lost";
                setPhase("lost");
                return;
              }
            }
            break;
          }
        }
      }

      // Enemies reach bottom
      for (let ei = s.enemies.length - 1; ei >= 0; ei--) {
        const e = s.enemies[ei];
        if (e.y > H - 60) {
          s.enemies.splice(ei, 1);
          if (e.word.id === s.target.id) {
            s.lives -= 1;
            setLives(s.lives);
            addExplosion(e.x + e.w / 2, H - 50, "#e52521");
            if (s.lives <= 0) {
              s.phase = "lost";
              setPhase("lost");
              return;
            }
          }
        }
      }

      // Particles
      for (const p of s.particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
      }
      s.particles = s.particles.filter((p) => p.life > 0);

      draw(ctx, s);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phase, seed, best]);

  const start = () => {
    setSeed((n) => n + 1);
    build();
  };

  const setMove = (dir: "left" | "right", active: boolean) => {
    keysRef.current[dir] = active;
  };

  const shoot = () => {
    keysRef.current.shoot = true;
    setTimeout(() => {
      keysRef.current.shoot = false;
    }, 80);
  };

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-4">
      <div className="rounded-2xl overflow-hidden border-4 border-indigo-700 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-[#0a0a1a] text-white text-sm font-bold">
          <span>🚀 Mini Uzay Savaşı</span>
          <span className="text-cyan-300">Hedef: {targetLabel || "—"}</span>
          <span>⭐ {score}</span>
          <span className="text-red-400">❤️ {lives}</span>
          <span className="text-gray-400">En iyi: {best}</span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="w-full h-auto block bg-[#050510] touch-none"
          />
          {phase === "ready" && (
            <Overlay
              title="Mini Uzay Savaşı"
              text="Doğru Almanca kelimeyi vur! Yanlış kelimeye ateş edersen can kaybedersin."
              button="Başla ▶"
              onClick={start}
            />
          )}
          {phase === "won" && (
            <Overlay title="Galaktik Zafer! 🏆" text={`Skor: ${score}`} button="Tekrar Oyna" onClick={start} />
          )}
          {phase === "lost" && (
            <Overlay title="Gemi düştü!" text={`Skor: ${score}`} button="Yeniden Dene" onClick={start} />
          )}
        </div>

        <div className="p-3 bg-[#0a0a1a] grid grid-cols-3 gap-2 max-w-lg mx-auto">
          <button
            type="button"
            onPointerDown={() => setMove("left", true)}
            onPointerUp={() => setMove("left", false)}
            onPointerLeave={() => setMove("left", false)}
            className="bg-indigo-700 text-white font-bold py-4 rounded-xl text-xl active:scale-95"
          >
            ◀
          </button>
          <button
            type="button"
            onPointerDown={shoot}
            className="bg-red-600 text-white font-bold py-4 rounded-xl text-sm active:scale-95"
          >
            🔫 Ateş
          </button>
          <button
            type="button"
            onPointerDown={() => setMove("right", true)}
            onPointerUp={() => setMove("right", false)}
            onPointerLeave={() => setMove("right", false)}
            className="bg-indigo-700 text-white font-bold py-4 rounded-xl text-xl active:scale-95"
          >
            ▶
          </button>
        </div>
        <p className="text-center text-xs text-white/70 bg-[#0a0a1a] pb-3 px-4">
          ← → hareket · Boşluk = ateş · Hedef Türkçe kelimenin Almanca karşılığını vur
        </p>
      </div>
    </div>
  );
};

function draw(
  ctx: CanvasRenderingContext2D,
  s: {
    px: number;
    bullets: Bullet[];
    enemies: Enemy[];
    particles: Particle[];
    stars: Star[];
    target: (typeof marioWords)[0];
    kills: number;
    goal: number;
    lives: number;
    anim: number;
  }
) {
  ctx.clearRect(0, 0, W, H);

  // Space background gradient
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#0a0a2e");
  grad.addColorStop(1, "#050510");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Stars
  for (const star of s.stars) {
    ctx.fillStyle = `rgba(255,255,255,${0.3 + star.size * 0.35})`;
    ctx.fillRect(star.x, star.y, star.size, star.size);
  }

  // Nebula glow
  ctx.fillStyle = "rgba(100,50,200,0.08)";
  ctx.beginPath();
  ctx.ellipse(W * 0.7, H * 0.3, 180, 120, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(0,150,255,0.06)";
  ctx.beginPath();
  ctx.ellipse(W * 0.2, H * 0.6, 140, 90, 0, 0, Math.PI * 2);
  ctx.fill();

  // Enemies
  for (const e of s.enemies) {
    const isTarget = e.word.id === s.target.id;
    ctx.fillStyle = isTarget ? "rgba(67,176,71,0.25)" : "rgba(229,37,33,0.2)";
    ctx.fillRect(e.x - 4, e.y - 4, e.w + 8, e.h + 8);

    // Enemy ship
    ctx.fillStyle = isTarget ? "#43b047" : "#c0392b";
    ctx.beginPath();
    ctx.moveTo(e.x + e.w / 2, e.y + e.h + 8);
    ctx.lineTo(e.x, e.y);
    ctx.lineTo(e.x + e.w, e.y);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(e.x, e.y + 2, e.w, e.h - 4);
    ctx.fillStyle = isTarget ? "#fbd000" : "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${e.word.emoji} ${e.word.de}`, e.x + e.w / 2, e.y + e.h / 2 + 5);
  }

  // Bullets
  for (const b of s.bullets) {
    ctx.fillStyle = "#00ffff";
    ctx.shadowColor = "#00ffff";
    ctx.shadowBlur = 8;
    ctx.fillRect(b.x - 2, b.y, 4, 14);
    ctx.shadowBlur = 0;
  }

  // Player ship
  const px = s.px;
  const py = H - 58;
  ctx.save();
  ctx.translate(px + 20, py + 20);

  // Engine flame
  ctx.fillStyle = `rgba(255,${100 + Math.sin(s.anim * 8) * 80},0,0.8)`;
  ctx.beginPath();
  ctx.moveTo(-6, 18);
  ctx.lineTo(0, 28 + Math.sin(s.anim * 10) * 4);
  ctx.lineTo(6, 18);
  ctx.fill();

  // Ship body
  ctx.fillStyle = "#3498db";
  ctx.beginPath();
  ctx.moveTo(0, -18);
  ctx.lineTo(-16, 16);
  ctx.lineTo(0, 10);
  ctx.lineTo(16, 16);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#5dade2";
  ctx.beginPath();
  ctx.moveTo(0, -12);
  ctx.lineTo(-8, 8);
  ctx.lineTo(8, 8);
  ctx.closePath();
  ctx.fill();

  // Cockpit
  ctx.fillStyle = "#85c1e9";
  ctx.beginPath();
  ctx.ellipse(0, -4, 5, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  // Particles
  for (const p of s.particles) {
    ctx.globalAlpha = Math.min(1, p.life / 30);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    ctx.globalAlpha = 1;
  }

  // HUD
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(8, 8, 320, 36);
  ctx.fillStyle = "#00ffff";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(
    `Hedef: ${s.target.tr} → ${s.target.de}  (${s.kills}/${s.goal})`,
    16,
    30
  );
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
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-[#0a0a1a] text-white rounded-2xl p-6 max-w-sm text-center border-4 border-cyan-400">
        <p className="text-2xl font-bold mb-2">{title}</p>
        <p className="text-sm text-gray-300 mb-5">{text}</p>
        <button type="button" onClick={onClick} className="bg-indigo-600 px-8 py-3 rounded-xl font-bold text-lg">
          {button}
        </button>
      </div>
    </div>
  );
}

export default SpaceBattleGame;
