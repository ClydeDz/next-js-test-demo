// import styles from "../page.module.css";

import Head from "next/head";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          property="og:image"
          content="https://files.clydedsouza.net/site/ogimage-portfolio.png"
        />
      </Head>
      <Link href={"/about"}>Home</Link>
      {/* <main className={styles.main}> */}
      <h1>Hello, About.js!</h1>
      <p style={{ color: variables.primaryColor }}>demo</p>
      {/* </main> */}
    </>
  );
}
