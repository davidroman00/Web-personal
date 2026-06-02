"use client";

import { Language } from "@/types/Language";
import { createContext, Dispatch, SetStateAction } from "react";

type SectionContextType = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

type SlidesContextType = {
  registerSlide: (el: HTMLElement | null, index: number) => void;
  goToSlide: (index: number) => void;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);
export const SlidesContext = createContext<SlidesContextType | null>(null);
export const LanguageContext = createContext<LanguageContextType | null>(null);
