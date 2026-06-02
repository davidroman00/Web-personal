'use client';

import { useContext } from "react";
import { LanguageContext } from "../context/CreateContext";

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useSectionContext must be used within a LanguageProvider");
  return context;
}
