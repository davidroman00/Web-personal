"use client";

import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";
import { useSlidesContext } from "@/hooks/useSlidesContext";
import StartSlide from "./_home/components/slides/StartSlide";
import AboutSlide from "./_home/components/slides/AboutSlide";
import ProjectsSlide from "./_home/components/slides/ProjectsSlide";
import SkillsSlide from "./_home/components/slides/SkillsSlide";
import ContactSlide from "./_home/components/slides/ContactSlide";
import styles from "./_home/Home.module.css";

function Home() {
  const { registerSlide } = useSlidesContext();
  const { isMobile } = useMobileBreakpoint();
  
  return (
    <>
      <section
        ref={(el) => registerSlide(el, 0)}
        className={`scroll ${styles.slide}  ${isMobile ? styles.fullSection : ""}`}
      >
        <StartSlide />
      </section>
      <section
        ref={(el) => registerSlide(el, 1)}
        className={`scroll ${styles.slide}  ${isMobile ? styles.fullSection : ""}`}
      >
        <AboutSlide />
      </section>
      <section
        ref={(el) => registerSlide(el, 2)}
        className={`scroll ${styles.slide}  ${isMobile ? styles.fullSection : ""}`}
      >
        <ProjectsSlide />
      </section>
      <section
        ref={(el) => registerSlide(el, 3)}
        className={`scroll ${styles.slide} ${isMobile ? styles.fullSection : ""}`}
      >
        <SkillsSlide />
      </section>
      <section
        ref={(el) => registerSlide(el, 4)}
        className={`scroll ${styles.slide} ${isMobile ? styles.fullSection : ""}`}
      >
        <ContactSlide />
      </section>
    </>
  );
}

export default Home;
