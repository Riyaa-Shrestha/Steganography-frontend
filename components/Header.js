import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.titleh1}>
        <Link href="/">Steganography</Link>
      </h1>
    </header>
  );
};
