import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footerText}>
        <Link href="/">2021@primecollege.edu.np</Link>
      </h1>
    </footer>
  );
};
