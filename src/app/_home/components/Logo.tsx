import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  src: string;
  alt: string;
};

function Logo({ src, alt }: LogoProps) {
  return (
<div className={styles.logoContainer}>
  <Image src={src} alt={alt} fill className={styles.image} />
</div>
  );
}

export default Logo;
