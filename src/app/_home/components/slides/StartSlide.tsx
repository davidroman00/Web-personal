"use client";

import { data } from "@/data/Data";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import styles from "./StartSlide.module.css";

function StartSlide() {
  const { language } = useLanguageContext();
  return <p className={`title ${styles.text}`}>{data[language].start}</p>;
}

export default StartSlide;
