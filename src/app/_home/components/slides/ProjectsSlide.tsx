"use client";

import { data } from "@/data/Data";
import { IndividualWork } from "@/types/IndividualWork";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";
import { useScrollableSlide } from "../../hooks/useScrollableSlide";
import ProjectCard from "../ProjectCard";
import styles from "./ProjectsSlide.module.css";

function ProjectsSlide() {
  const slideRef = useScrollableSlide();
  const { language } = useLanguageContext();
  const { isMobile } = useMobileBreakpoint(1024);

  function mapData(data: IndividualWork[]) {
    return data.map((item) => <ProjectCard key={item.title} item={item} />);
  }

  return (
    <>
      {isMobile ? (
        <div ref={slideRef} className={styles.container}>
          <p className="title">{data[language].projects.title}</p>
          <div className={styles.projectsGrid}>
            {mapData(data[language].projects.works)}
          </div>
        </div>
      ) : (
        <>
          <p className="title">{data[language].projects.title}</p>
          <div className={styles.projectsGrid}>
            {mapData(data[language].projects.works)}
          </div>
        </>
      )}
    </>
  );
}

export default ProjectsSlide;
