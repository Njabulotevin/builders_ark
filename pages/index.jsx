import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" ">
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Builders Ark was established in 2014 by an enthusiastic entrepreneur,
          George Bokaba. As an emerging contractor."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
