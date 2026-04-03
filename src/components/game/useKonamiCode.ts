import { useEffect, useState, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
];

export function useKonamiCode() {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (activated) return;

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const handler = (e: KeyboardEvent) => {
      clearTimeout(timer);

      if (e.code === KONAMI_CODE[index]) {
        index++;
        if (index === KONAMI_CODE.length) {
          setActivated(true);
          index = 0;
          return;
        }
        // 3秒以内に次のキーを押さないとリセット
        timer = setTimeout(() => { index = 0; }, 3000);
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      clearTimeout(timer);
    };
  }, [activated]);

  const reset = useCallback(() => setActivated(false), []);

  return { activated, reset };
}
