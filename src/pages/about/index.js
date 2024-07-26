// import styles from "../page.module.css";

import Head from "next/head";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";

export async function getStaticProps() {
  const res = await fetch("https://api.clydedsouza.net/platforms.json");
  const repo = await res.json();
  return { props: { repo } };
}

export default function Index({ repo }) {
  console.log(repo.data);
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
