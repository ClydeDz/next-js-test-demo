// import styles from "../page.module.css";

import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Hello World!!!</title>
        <meta
          property="og:image"
          content="https://files.clydedsouza.net/site/ogimage.png'"
        />
      </Head>
      <h1>Hello, home</h1>
      <Link href={"/about"}>About</Link>
    </>
    // <main className={styles.main}>

    // </main>
  );
}
