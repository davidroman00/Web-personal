"use client";

import { IndividualWork } from "@/types/IndividualWork";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

type ProjectCardProps = {
  item: IndividualWork;
};

function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className={styles.cardContainer}>
      <p className="bold subtitle detailText">{item.title}</p>
      <Image
        src={`/Works/${item.src}.webp`}
        alt={`${item.title} image`}
        width={1000}
        height={500}
        className={styles.image}
      />
      <p className={`${styles.description} text`}>{item.description}</p>
    </div>
  );
}

export default ProjectCard;
