'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

// ========== インベーダーのピクセルパターン ==========
const INVADER_PATTERNS = {
  // タイプA: イカ型 (8x6)
  squid: [
    [0,0,0,1,1,0,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [1,1,0,1,1,0,1,1],
    [1,1,1,1,1,1,1,1],
    [0,1,0,0,0,0,1,0],
  ],
  // タイプB: カニ型 (8x6)
  crab: [
    [0,1,0,0,0,0,1,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [1,1,0,1,1,0,1,1],
    [1,1,1,1,1,1,1,1],
    [0,0,1,0,0,1,0,0],
  ],
  // タイプC: タコ型 (8x6)
  octopus: [
    [0,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1],
    [1,1,0,1,1,0,1,1],
    [0,1,1,1,1,1,1,0],
    [0,0,1,0,0,1,0,0],
  ],
};

const PLAYER_PATTERN = [
  [0,0,0,0,1,0,0,0,0],
  [0,0,0,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
];

// ========== 定数 ==========
const GAME_W = 640;
const GAME_H = 480;
const PIXEL = 3; // ピクセルサイズ
const INVADER_COLS = 8;
const INVADER_ROWS = 5;
const INVADER_H_GAP = 48;
const INVADER_V_GAP = 40;
const PLAYER_SPEED = 5;
const BULLET_SPEED = 7;
const ENEMY_BULLET_SPEED = 3;
const INVADER_STEP_X = 12;
const INVADER_STEP_Y = 20;

interface Bullet {
  x: number;
  y: number;
  active: boolean;
}

interface Invader {
  x: number;
  y: number;
  alive: boolean;
  type: 'squid' | 'crab' | 'octopus';
  points: number;
}

interface Explosion {
  x: number;
  y: number;
  frame: number;
}

interface Props {
  onExit: () => void;
}

export function SpaceInvaders({ onExit }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'title' | 'playing' | 'gameover' | 'clear'>('title');
  const gameRef = useRef({
    player: { x: GAME_W / 2, y: GAME_H - 50 },
    bullets: [] as Bullet[],
    enemyBullets: [] as Bullet[],
    invaders: [] as Invader[],
    explosions: [] as Explosion[],
    score: 0,
    lives: 3,
    direction: 1 as 1 | -1,
    moveTimer: 0,
    moveInterval: 45,
    shootTimer: 0,
    keys: {} as Record<string, boolean>,
    animId: 0,
    gameState: 'title' as string,
  });

  const initGame = useCallback(() => {
    const g = gameRef.current;
    g.player = { x: GAME_W / 2, y: GAME_H - 50 };
    g.bullets = [];
    g.enemyBullets = [];
    g.explosions = [];
    g.score = 0;
    g.lives = 3;
    g.direction = 1;
    g.moveTimer = 0;
    g.moveInterval = 45;
    g.shootTimer = 0;

    // インベーダー配置
    const invaders: Invader[] = [];
    const startX = (GAME_W - (INVADER_COLS * INVADER_H_GAP)) / 2 + 24;
    const startY = 60;

    for (let row = 0; row < INVADER_ROWS; row++) {
      for (let col = 0; col < INVADER_COLS; col++) {
        const type: Invader['type'] = row === 0 ? 'squid' : row <= 2 ? 'crab' : 'octopus';
        const points = row === 0 ? 30 : row <= 2 ? 20 : 10;
        invaders.push({
          x: startX + col * INVADER_H_GAP,
          y: startY + row * INVADER_V_GAP,
          alive: true,
          type,
          points,
        });
      }
    }
    g.invaders = invaders;
  }, []);

  const drawPixelPattern = useCallback((
    ctx: CanvasRenderingContext2D,
    pattern: number[][],
    x: number,
    y: number,
    color: string,
    pixelSize: number,
  ) => {
    ctx.fillStyle = color;
    const totalW = pattern[0].length * pixelSize;
    const totalH = pattern.length * pixelSize;
    const offsetX = x - totalW / 2;
    const offsetY = y - totalH / 2;

    for (let row = 0; row < pattern.length; row++) {
      for (let col = 0; col < pattern[row].length; col++) {
        if (pattern[row][col]) {
          ctx.fillRect(
            offsetX + col * pixelSize,
            offsetY + row * pixelSize,
            pixelSize,
            pixelSize,
          );
        }
      }
    }
  }, []);

  // ゲームループ
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const g = gameRef.current;

    const keyDown = (e: KeyboardEvent) => {
      g.keys[e.code] = true;
      if (e.code === 'Space') e.preventDefault();
    };
    const keyUp = (e: KeyboardEvent) => {
      g.keys[e.code] = false;
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    const INVADER_COLORS: Record<string, string> = {
      squid: '#ff0000',
      crab: '#ffff00',
      octopus: '#00ff00',
    };

    const drawScanlines = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      for (let i = 0; i < GAME_H; i += 3) {
        ctx.fillRect(0, i, GAME_W, 1);
      }
    };

    const drawHUD = () => {
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px "Courier New", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE: ${g.score}`, 16, 24);
      ctx.textAlign = 'right';
      ctx.fillText(`LIVES: ${'▲'.repeat(g.lives)}`, GAME_W - 16, 24);
      ctx.textAlign = 'left';

      // 区切り線
      ctx.strokeStyle = '#333333';
      ctx.beginPath();
      ctx.moveTo(0, 36);
      ctx.lineTo(GAME_W, 36);
      ctx.stroke();
    };

    const drawExplosions = () => {
      for (const exp of g.explosions) {
        const progress = exp.frame / 15;
        const size = 8 + progress * 20;
        ctx.globalAlpha = 1 - progress;
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(exp.x - size / 2, exp.y - size / 2, size, size);
        ctx.fillStyle = '#ff8800';
        ctx.fillRect(exp.x - size / 3, exp.y - size / 3, size * 0.66, size * 0.66);
        ctx.globalAlpha = 1;
      }
    };

    const drawTitle = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, GAME_W, GAME_H);

      // タイトルインベーダー
      drawPixelPattern(ctx, INVADER_PATTERNS.crab, GAME_W / 2, 140, '#00ff00', 6);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SPACE INVADERS', GAME_W / 2, 240);

      ctx.fillStyle = '#00ff00';
      ctx.font = '16px "Courier New", monospace';
      ctx.fillText('~ 零元創匠 EDITION ~', GAME_W / 2, 275);

      // 点滅テキスト
      if (Math.floor(Date.now() / 500) % 2 === 0) {
        ctx.fillStyle = '#ffff00';
        ctx.font = '18px "Courier New", monospace';
        ctx.fillText('PRESS SPACE TO START', GAME_W / 2, 340);
      }

      ctx.fillStyle = '#808080';
      ctx.font = '14px "Courier New", monospace';
      ctx.fillText('← → : MOVE    SPACE : SHOOT', GAME_W / 2, 390);
      ctx.fillText('ESC : EXIT', GAME_W / 2, 415);

      // スコアテーブル
      ctx.font = '12px "Courier New", monospace';
      ctx.fillStyle = '#ff0000';
      ctx.fillText('■ = 30 PTS', GAME_W / 2 - 60, 310);
      ctx.fillStyle = '#ffff00';
      ctx.fillText('■ = 20 PTS', GAME_W / 2, 310);
      ctx.fillStyle = '#00ff00';
      ctx.fillText('■ = 10 PTS', GAME_W / 2 + 60, 310);

      ctx.textAlign = 'left';
      drawScanlines();
    };

    const drawGameOver = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, GAME_W, GAME_H);

      ctx.fillStyle = '#ff0000';
      ctx.font = 'bold 48px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', GAME_W / 2, GAME_H / 2 - 30);

      ctx.fillStyle = '#ffffff';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText(`FINAL SCORE: ${g.score}`, GAME_W / 2, GAME_H / 2 + 20);

      if (Math.floor(Date.now() / 500) % 2 === 0) {
        ctx.fillStyle = '#ffff00';
        ctx.font = '16px "Courier New", monospace';
        ctx.fillText('PRESS SPACE TO RETRY', GAME_W / 2, GAME_H / 2 + 70);
      }

      ctx.textAlign = 'left';
    };

    const drawClear = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, GAME_W, GAME_H);

      ctx.fillStyle = '#00ff00';
      ctx.font = 'bold 48px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('STAGE CLEAR!', GAME_W / 2, GAME_H / 2 - 30);

      ctx.fillStyle = '#ffffff';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText(`SCORE: ${g.score}`, GAME_W / 2, GAME_H / 2 + 20);

      if (Math.floor(Date.now() / 500) % 2 === 0) {
        ctx.fillStyle = '#ffff00';
        ctx.font = '16px "Courier New", monospace';
        ctx.fillText('PRESS SPACE TO CONTINUE', GAME_W / 2, GAME_H / 2 + 70);
      }

      ctx.textAlign = 'left';
    };

    const gameLoop = () => {
      g.animId = requestAnimationFrame(gameLoop);

      // ESCで終了
      if (g.keys['Escape']) {
        g.keys['Escape'] = false;
        cancelAnimationFrame(g.animId);
        onExit();
        return;
      }

      // ========== タイトル画面 ==========
      if (g.gameState === 'title') {
        drawTitle();
        if (g.keys['Space']) {
          g.keys['Space'] = false;
          initGame();
          g.gameState = 'playing';
          setGameState('playing');
        }
        return;
      }

      // ========== ゲームオーバー / クリア ==========
      if (g.gameState === 'gameover') {
        drawGameOver();
        if (g.keys['Space']) {
          g.keys['Space'] = false;
          g.gameState = 'title';
          setGameState('title');
        }
        return;
      }

      if (g.gameState === 'clear') {
        drawClear();
        if (g.keys['Space']) {
          g.keys['Space'] = false;
          initGame();
          g.gameState = 'playing';
          setGameState('playing');
        }
        return;
      }

      // ========== プレイ中 ==========
      // 背景
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, GAME_W, GAME_H);

      // --- プレイヤー操作 ---
      if (g.keys['ArrowLeft'] && g.player.x > 30) {
        g.player.x -= PLAYER_SPEED;
      }
      if (g.keys['ArrowRight'] && g.player.x < GAME_W - 30) {
        g.player.x += PLAYER_SPEED;
      }

      // 発射
      if (g.keys['Space'] && g.bullets.filter(b => b.active).length < 3) {
        g.keys['Space'] = false;
        g.bullets.push({ x: g.player.x, y: g.player.y - 15, active: true });
      }

      // --- 弾の更新 ---
      for (const b of g.bullets) {
        if (!b.active) continue;
        b.y -= BULLET_SPEED;
        if (b.y < 0) b.active = false;
      }

      for (const b of g.enemyBullets) {
        if (!b.active) continue;
        b.y += ENEMY_BULLET_SPEED;
        if (b.y > GAME_H) b.active = false;
      }

      // --- インベーダー移動 ---
      g.moveTimer++;
      if (g.moveTimer >= g.moveInterval) {
        g.moveTimer = 0;

        // 端チェック
        let hitEdge = false;
        for (const inv of g.invaders) {
          if (!inv.alive) continue;
          const nextX = inv.x + INVADER_STEP_X * g.direction;
          if (nextX < 30 || nextX > GAME_W - 30) {
            hitEdge = true;
            break;
          }
        }

        if (hitEdge) {
          g.direction = (g.direction * -1) as 1 | -1;
          for (const inv of g.invaders) {
            if (inv.alive) inv.y += INVADER_STEP_Y;
          }
        } else {
          for (const inv of g.invaders) {
            if (inv.alive) inv.x += INVADER_STEP_X * g.direction;
          }
        }
      }

      // --- 敵射撃 ---
      g.shootTimer++;
      if (g.shootTimer >= 60 && Math.random() < 0.3) {
        g.shootTimer = 0;
        const aliveInvaders = g.invaders.filter(i => i.alive);
        if (aliveInvaders.length > 0) {
          const shooter = aliveInvaders[Math.floor(Math.random() * aliveInvaders.length)];
          g.enemyBullets.push({ x: shooter.x, y: shooter.y + 12, active: true });
        }
      }

      // --- 当たり判定: 弾 vs インベーダー ---
      for (const b of g.bullets) {
        if (!b.active) continue;
        for (const inv of g.invaders) {
          if (!inv.alive) continue;
          if (Math.abs(b.x - inv.x) < 14 && Math.abs(b.y - inv.y) < 10) {
            b.active = false;
            inv.alive = false;
            g.score += inv.points;
            g.explosions.push({ x: inv.x, y: inv.y, frame: 0 });

            // スピードアップ
            const aliveCount = g.invaders.filter(i => i.alive).length;
            g.moveInterval = Math.max(5, Math.floor(45 * (aliveCount / (INVADER_COLS * INVADER_ROWS))));
            break;
          }
        }
      }

      // --- 当たり判定: 敵弾 vs プレイヤー ---
      for (const b of g.enemyBullets) {
        if (!b.active) continue;
        if (Math.abs(b.x - g.player.x) < 14 && Math.abs(b.y - g.player.y) < 10) {
          b.active = false;
          g.lives--;
          g.explosions.push({ x: g.player.x, y: g.player.y, frame: 0 });
          if (g.lives <= 0) {
            g.gameState = 'gameover';
            setGameState('gameover');
          }
        }
      }

      // --- インベーダーが最下部に到達 ---
      for (const inv of g.invaders) {
        if (inv.alive && inv.y >= g.player.y - 20) {
          g.lives = 0;
          g.gameState = 'gameover';
          setGameState('gameover');
          break;
        }
      }

      // --- クリア判定 ---
      if (g.invaders.every(i => !i.alive)) {
        g.gameState = 'clear';
        setGameState('clear');
      }

      // --- 爆発更新 ---
      for (const exp of g.explosions) {
        exp.frame++;
      }
      g.explosions = g.explosions.filter(e => e.frame < 15);

      // --- 不要な弾の削除 ---
      g.bullets = g.bullets.filter(b => b.active);
      g.enemyBullets = g.enemyBullets.filter(b => b.active);

      // ========== 描画 ==========

      // インベーダー
      for (const inv of g.invaders) {
        if (!inv.alive) continue;
        const pattern = INVADER_PATTERNS[inv.type];
        const color = INVADER_COLORS[inv.type];
        drawPixelPattern(ctx, pattern, inv.x, inv.y, color, PIXEL);
      }

      // プレイヤー
      drawPixelPattern(ctx, PLAYER_PATTERN, g.player.x, g.player.y, '#00ffff', PIXEL);

      // 弾
      ctx.fillStyle = '#ffffff';
      for (const b of g.bullets) {
        if (b.active) ctx.fillRect(b.x - 1, b.y - 4, 3, 8);
      }

      ctx.fillStyle = '#ff4444';
      for (const b of g.enemyBullets) {
        if (b.active) ctx.fillRect(b.x - 1, b.y - 4, 3, 8);
      }

      // 爆発
      drawExplosions();

      // HUD
      drawHUD();

      // スキャンライン
      drawScanlines();
    };

    g.gameState = 'title';
    g.animId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(g.animId);
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, [initGame, drawPixelPattern, onExit]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}
    >
      {/* Win95ウィンドウフレーム */}
      <div style={{ border: '2px outset #c0c0c0', backgroundColor: '#c0c0c0' }}>
        {/* タイトルバー */}
        <div
          style={{
            background: 'linear-gradient(90deg, #000080, #1084d0)',
            color: '#ffffff',
            padding: '2px 4px',
            fontWeight: 'bold',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: '"MS PGothic", "MS Gothic", monospace',
          }}
        >
          <span>SPACE INVADERS - 零元創匠 Edition</span>
          <button
            onClick={onExit}
            style={{
              border: '2px outset #c0c0c0',
              backgroundColor: '#c0c0c0',
              color: '#000000',
              fontWeight: 'bold',
              fontSize: '12px',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              lineHeight: '14px',
              padding: 0,
            }}
          >
            ×
          </button>
        </div>

        {/* キャンバス */}
        <div style={{ padding: '2px', backgroundColor: '#c0c0c0' }}>
          <canvas
            ref={canvasRef}
            width={GAME_W}
            height={GAME_H}
            style={{
              display: 'block',
              border: '2px inset #c0c0c0',
              imageRendering: 'pixelated',
            }}
          />
        </div>

        {/* ステータスバー */}
        <div
          style={{
            borderTop: '2px outset #c0c0c0',
            padding: '2px 8px',
            fontSize: '11px',
            fontFamily: '"MS PGothic", "MS Gothic", monospace',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>
            {gameState === 'title' && 'SPACEキーでスタート'}
            {gameState === 'playing' && 'プレイ中... ESCで終了'}
            {gameState === 'gameover' && 'GAME OVER - SPACEでリトライ'}
            {gameState === 'clear' && 'STAGE CLEAR! - SPACEで続行'}
          </span>
          <span>PC専用</span>
        </div>
      </div>
    </div>
  );
}
