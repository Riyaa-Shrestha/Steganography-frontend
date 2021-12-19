import Link from "next/link";
import Head from "next/head";
import paperclip from "../images/paperclip.png";
import command from "../images/command.png";
import { Layout } from "../components";
import { Header } from "../components";
import { Footer } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Steganography</title>
        <meta name="description" content="Steganography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Layout className={styles.container}>
        <div className={styles.container} style={{ paddingTop: "116px" }}></div>
        <h2 className={styles.titleh2}>
          Step 1: To get started click on any button below
        </h2>
        <Link href="/child1">
          <a className={styles.bigButtonBlue}>
            <img src="" />
            <span>{"Encrypt"}</span>
            <p>Encrypts your text messages inside images and audios.</p>
          </a>
        </Link>
        <Link href="/child2">
          <a className={styles.bigButtonRed}>
            <img src="" />
            <span>{"Decrypt"}</span>
            <p>Decrypts your messages from stego images and audios.</p>
          </a>
        </Link>
      </Layout>
      <Footer />
    </div>
  );
}
