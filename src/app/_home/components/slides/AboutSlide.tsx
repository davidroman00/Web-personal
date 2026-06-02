'use client';

import { data } from "@/data/Data";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";
import styles from "./AboutSlide.module.css";

function AboutSlide() {
  const { language } = useLanguageContext();
  const { isMobile } = useMobileBreakpoint();
  return (
    <>
      <div className={styles.container}>
        <div className={isMobile ? styles.mobileAbout : styles.about}>
          <p className={`title ${styles.aboutTitle}`}>
            {data[language].about.title}
          </p>
          <p className={`subtitle ${styles.aboutText}`}>
            {data[language].about.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutSlide;
