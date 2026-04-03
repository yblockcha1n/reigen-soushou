'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  gravity: number;
}

interface Props {
  onComplete: () => void;
}

const PARTICLE_SIZE = 6;
const COLORS = ['#c0c0c0', '#b0b0b0', '#d0d0d0', '#a0a0a0', '#808080', '#000080', '#ffffff'];

export function ParticleTransition({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // パーティクル生成
    const particles: Particle[] = [];
    const cols = Math.ceil(W / PARTICLE_SIZE);
    const rows = Math.ceil(H / PARTICLE_SIZE);
    const centerX = W / 2;
    const centerY = H / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * PARTICLE_SIZE;
        const y = row * PARTICLE_SIZE;

        // 中心からの角度と距離で速度を決定
        const dx = x - centerX;
        const dy = y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const speed = 2 + Math.random() * 8 + (dist / Math.max(W, H)) * 6;

        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
          vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 4 - 2,
          size: PARTICLE_SIZE,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 1,
          gravity: 0.15 + Math.random() * 0.1,
        });
      }
    }

    let frame = 0;
    const TOTAL_FRAMES = 90; // ~1.5秒 @ 60fps
    let animId: number;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      let visibleCount = 0;

      for (const p of particles) {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.012;

        if (p.alpha > 0 && p.x > -50 && p.x < W + 50 && p.y > -50 && p.y < H + 50) {
          visibleCount++;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      }

      ctx.globalAlpha = 1;

      if (frame >= TOTAL_FRAMES || visibleCount === 0) {
        cancelAnimationFrame(animId);
        onComplete();
        return;
      }

      animId = requestAnimationFrame(animate);
    };

    // 最初のフレームは画面全体をグレーで埋める（ページを隠す）
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(0, 0, W, H);

    // 少し待ってからアニメーション開始
    const startTimer = setTimeout(() => {
      animId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(startTimer);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    />
  );
}
