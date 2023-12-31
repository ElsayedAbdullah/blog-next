import styles from "./footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>Syd Dev</div>
      <div className={styles.text}>
        Sayed creative thoughts agency © {year} All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
