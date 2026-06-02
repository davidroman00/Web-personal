'use client';

import styles from "./LanguageButton.module.css";
import { useLanguageContext } from "@/hooks/useLanguageContext";

function LanguageButton() {
  const { language, toggleLanguage } = useLanguageContext();
  
  return (
    <div className={styles.languageButton}>
      <button
        className={`${styles.langBtn} ${language === "es" ? styles.active : ""}`}
        onClick={language === "en" ? toggleLanguage : undefined}
        type="button"
      >
        ES
      </button>
      <span>|</span>
      <button
        className={`${styles.langBtn} ${language === "en" ? styles.active : ""}`}
        onClick={language === "es" ? toggleLanguage : undefined}
        type="button"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageButton;
