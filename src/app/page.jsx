import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>Creative Thoughts Agency.</h1>
        <p className={styles.p}>
          Unleashing innovation through boundless imagination, where ideas
          transcend limits and creativity knows no bounds.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="brands"
            fill
            className={styles.brandsImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/hero.gif"} alt="home" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
