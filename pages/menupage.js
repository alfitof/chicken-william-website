import Head from "next/head";
import Layout from "../components/layout";
import css from "../styles/Home.module.css";
import { client } from "../lib/client";
import Menu from "../components/Menu";
import { useSession, getSession } from "next-auth/react";

export default function MenuPage({ ayams }) {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Menu</title>
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
          <Menu ayams={ayams} />
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ req }) => {
  const query = '*[_type == "ayam"]';
  const ayams = await client.fetch(query);
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination:
          "https://chicken-william.vercel.app/api/auth/signin?callbackUrl=https%3A%2F%2Fchicken-william.vercel.app%2Fmenupage",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ayams,
      session,
    },
  };
};
