'use client';

import { ReactNode, useState } from "react";
import { LanguageContext } from "./CreateContext";
import { Language } from "@/types/Language";

type LanguageProviderProps = {
  children: ReactNode;
};

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
