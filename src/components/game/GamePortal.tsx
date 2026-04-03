'use client';

import { useState, useCallback, useEffect } from 'react';
import { useKonamiCode } from './useKonamiCode';
import { ParticleTransition } from './ParticleTransition';
import { SpaceInvaders } from './SpaceInvaders';

type Phase = 'idle' | 'transition' | 'game';

export function GamePortal() {
  const { activated, reset } = useKonamiCode();
  const [phase, setPhase] = useState<Phase>('idle');
  const [isMobile, setIsMobile] = useState(false);

  // モバイル判定（PC限定）
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // コナミコマンド発動
  useEffect(() => {
    if (activated && !isMobile && phase === 'idle') {
      setPhase('transition');
    }
  }, [activated, isMobile, phase]);

  const handleTransitionComplete = useCallback(() => {
    setPhase('game');
  }, []);

  const handleExit = useCallback(() => {
    setPhase('idle');
    reset();
  }, [reset]);

  // モバイルやidle時は何も表示しない
  if (isMobile || phase === 'idle') return null;

  return (
    <>
      {phase === 'transition' && (
        <ParticleTransition onComplete={handleTransitionComplete} />
      )}
      {phase === 'game' && (
        <SpaceInvaders onExit={handleExit} />
      )}
    </>
  );
}
