import Head from "next/head";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import css from "../styles/Home.module.css";

import Services from "../components/Services";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Chicken William</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
        </Head>
        {/* body */}
        <main>
          {/* <Nav /> */}
          <Hero />
          {/* <Banner /> */}
          <Services />
          {/* <ProductSection /> */}
        </main>
      </div>
    </Layout>
  );
}
