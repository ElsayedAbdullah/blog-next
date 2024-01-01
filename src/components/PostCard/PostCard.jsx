import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="post one"
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.date}>01.01.2024</div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda a
          autem cum alias rerum. Quisquam eius quasi culpa dolor? Magni fuga
          nobis maxime quis.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
