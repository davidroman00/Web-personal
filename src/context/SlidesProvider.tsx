"use client";

import { ReactNode, useEffect, useRef } from "react";
import { SlidesContext } from "./CreateContext";
import { useSectionContext } from "@/hooks/useSectionContext";

type SlidesProviderProps = {
  children: ReactNode;
};

function SlidesProvider({ children }: SlidesProviderProps) {
  const slideRefs = useRef<HTMLElement[]>([]);
  const { setActive } = useSectionContext();

  const registerSlide = (el: HTMLElement | null, index: number) => {
    if (el) slideRefs.current[index] = el;
  };

  const goToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(slideRefs.current.indexOf(entry.target as HTMLElement));
          }
        });
      },
      { threshold: 0.6 },
    );

    slideRefs.current.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [setActive]);

  return (
    <SlidesContext.Provider value={{ registerSlide, goToSlide }}>
      {children}
    </SlidesContext.Provider>
  );
}

export default SlidesProvider;
