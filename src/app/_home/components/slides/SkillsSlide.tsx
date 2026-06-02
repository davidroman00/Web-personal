'use client';

import { useLanguageContext } from "@/hooks/useLanguageContext";
import { data } from "@/data/Data";
import Logo from "../Logo";
import styles from "./SkillsSlide.module.css";

function SkillsSlide() {
  const { language } = useLanguageContext();
  return (
    <>
      <p className="title">
        {data[language].skills.title}
      </p>
      <div className={styles.skillList}>
        {data.es.skills.logos.map((name) => (
          <Logo
            key={name}
            src={`/Logos/${name}-logo.svg`}
            alt={`${name} logo`}
          />
        ))}
      </div>
    </>
  );
}

export default SkillsSlide;
