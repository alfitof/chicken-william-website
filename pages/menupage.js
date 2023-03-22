import Head from "next/head";
import Layout from "../components/layout";
import css from "../styles/Home.module.css";
import { client } from "../lib/client";
import Menu from "../components/Menu";

export default function MenuPage({ ayams }) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Menu</title>
        </Head>
        {/* body */}
        <main>
          <Menu ayams={ayams} />
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "ayam"]';
  const ayams = await client.fetch(query);
  return {
    props: {
      ayams,
    },
  };
};
