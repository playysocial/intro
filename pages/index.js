import Head from "next/head";
import styles from "../styles/MainScreen.module.css";
import Image from "next/image";

export default function MainScreen() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/HelveticaNeue.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SamsungSharpSans.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <h1 className={styles.mainText}>PlayySocial</h1>
      <p className={styles.subText}>
        <span className={styles.discover}>Discover.</span>&nbsp;
        <span className={styles.plan}>Plan.</span>&nbsp;
        <span className={styles.connect}>Connect.</span>
      </p>
      <div className={styles.arrowContainer}>
        <Image
          src="/images/right-stackarrow.png"
          alt="Scroll Down Arrow"
          width={28}
          height={28}
          className={styles.arrow}
        />
      </div>
    </div>
  );
}
