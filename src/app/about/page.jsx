import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>About Agency</h3>
        <h1 className={styles.title}>Crafting Bold, Better Digital Ideas.</h1>
        <p className={styles.desc}>
          Pioneering digital innovation with bold ideas and precision, we lead
          as the world&apos;s top consulting and finance solution provider,
          offering a wide spectrum of web and software development services.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.stat}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.stat}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={"/about.png"}
          alt="about"
          fill
          className={styles.aboutImg}
        />
      </div>
    </div>
  );
}

export default AboutPage;
