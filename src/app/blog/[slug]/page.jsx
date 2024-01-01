import Image from "next/image";
import styles from "./single-post.module.css";

export default function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post one"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            src={
              "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="sayed"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detail}>
            <p className={styles.detailTitle}>author</p>
            <p className={styles.detailValue}>sayed</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.detailTitle}>date</p>
            <p className={styles.detailValue}>01.01.2024</p>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          porro unde eaque aliquid accusamus minima officia impedit, ipsam
          adipisci, nam expedita earum debitis mollitia, quam nostrum ad ipsa id
          maiores!
        </p>
      </div>
    </div>
  );
}
