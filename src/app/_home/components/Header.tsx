'use client';

import { useSectionContext } from "@/hooks/useSectionContext";
import { useSlidesContext } from "@/hooks/useSlidesContext";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";
import LanguageButton from "./LanguageButton";
import styles from "./Header.module.css";

const HEADER_TEXTS ={
  en: {
    start: "Start",
    about: "About Me",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  es: {
    start: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
};

function Header() {
  const { active } = useSectionContext();
  const { goToSlide } = useSlidesContext();
  const { language } = useLanguageContext();
  const { isMobile } = useMobileBreakpoint();

  return (
    <header className={styles.header}>
      <div className={isMobile ? styles.leftHeaderMobile : styles.leftHeader}>
        <div className={styles.signature}>
          <p className="bold text">David.</p>
        </div>
        <LanguageButton />
      </div>
      {!isMobile && (
        <nav className={styles.nav}>
          <button
            className={active === 0 ? styles.active : undefined}
            onClick={() => goToSlide(0)}
          >
            {HEADER_TEXTS[language].start}
          </button>
          <button
            className={active === 1 ? styles.active : undefined}
            onClick={() => goToSlide(1)}
          >
            {HEADER_TEXTS[language].about}
          </button>
          <button
            className={active === 2 ? styles.active : undefined}
            onClick={() => goToSlide(2)}
          >
            {HEADER_TEXTS[language].projects}
          </button>
          <button
            className={active === 3 ? styles.active : undefined}
            onClick={() => goToSlide(3)}
          >
            {HEADER_TEXTS[language].skills}
          </button>
          <button
            className={active === 4 ? styles.active : undefined}
            onClick={() => goToSlide(4)}
          >
            {HEADER_TEXTS[language].contact}
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
