'use client';

import { useRef, useEffect } from 'react';

export function useScrollableSlide() {
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const atTop = el.scrollTop === 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      const scrollingUp = e.deltaY < 0;
      const scrollingDown = e.deltaY > 0;

      if ((atBottom && scrollingDown) || (atTop && scrollingUp)) {
        document.documentElement.style.scrollSnapType = 'y mandatory';
      } else {
        document.documentElement.style.scrollSnapType = 'none';
        e.stopPropagation();
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: true });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return slideRef;
}
