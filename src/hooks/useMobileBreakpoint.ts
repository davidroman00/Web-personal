'use client';

import { useState, useEffect } from "react";

export function useMobileBreakpoint(breakpoint = 500) {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' 
      ? window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches 
      : false
  );

  useEffect(() => {
    const listener = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    listener.addEventListener("change", handler);
    return () => listener.removeEventListener("change", handler);
  }, [breakpoint]);

  return { isMobile };
}