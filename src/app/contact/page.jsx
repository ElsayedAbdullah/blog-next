import Image from "next/image";
import styles from "./contact.module.css";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} fill alt="contact" className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
