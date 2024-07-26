// import styles from "../page.module.css";

import Head from "next/head";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";

async function getData() {
  const res = await fetch("https://api.clydedsouza.net/platforms.json");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}

export default async function Index() {
  const repoData = await getData();
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
      <p style={{ color: variables.primaryColor }}>demo123</p>

      {repoData.data.map((i) => {
        return <p key={i.title}>{i.title}</p>;
      })}
      {/* </main> */}
    </>
  );
}
