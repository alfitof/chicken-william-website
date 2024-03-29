import css from "../../styles/Ayam.module.css";
import Layout from "../../components/layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import panahKiri from "../../assets/arrowLeft.svg";
import panahKanan from "../../assets/arrowRight.svg";
import { useState } from "react";
import Head from "next/head";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

export default function Ayam({ ayam }) {
  const src = urlFor(ayam.image).url();
  const [Quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState(1);

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const addAyam = useStore((state) => state.addAyam);
  const addToCart = () => {
    addAyam({
      ...ayam,
      price: ayam.price[Size],
      quantity: Quantity,
      size: Size,
    });
    toast.success("Berhasil ditambahkan!");
  };

  return (
    <Layout>
      <Head>
        <title>{ayam.name}</title>
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
      {/* <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className={css.imageWrapper}>
          <Image
            src={src}
            loader={() => src}
            unoptimized
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </div>
        <div className={css.right}>
          <span>{ayam.name}</span>
          <span>Rp. {ayam.price[Size]}</span>
          <div className={css.additional}>
            <span>Additional</span>
            <div className={css.sauceVariant}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                No Sauce
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Cheese Sauce
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ""}
              >
                BBQ Sauce
              </div>
              <div
                onClick={() => setSize(3)}
                className={Size === 3 ? css.selected : ""}
              >
                Geprek Sauce
              </div>
              <div
                onClick={() => setSize(4)}
                className={Size === 4 ? css.selected : ""}
              >
                Matah Sauce
              </div>
              <div
                onClick={() => setSize(5)}
                className={Size === 5 ? css.selected : ""}
              >
                Gochujang Sauce
              </div>
              <div
                onClick={() => setSize(6)}
                className={Size === 6 ? css.selected : ""}
              >
                Mozarella
              </div>
              <div
                onClick={() => setSize(7)}
                className={Size === 7 ? css.selected : ""}
              >
                Mayonaise
              </div>
              <div
                onClick={() => setSize(8)}
                className={Size === 8 ? css.selected : ""}
              >
                Blackpepper
              </div>
              <div
                onClick={() => setSize(9)}
                className={Size === 9 ? css.selected : ""}
              >
                Spicy BBQ
              </div>
              <div
                onClick={() => setSize(10)}
                className={Size === 10 ? css.selected : ""}
              >
                Mushroom
              </div>
            </div>
          </div>
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={panahKiri}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity("dec")}
              />
              <span>{Quantity}</span>

              <Image
                src={panahKanan}
                height={20}
                alt=""
                width={20}
                objectFit="contain"
                onClick={() => handleQuantity("inc")}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Tambahkan
          </div>
        </div>
      </div> */}

      <div className="flex flex-col gap-0 mt-5 md:mt-10 md:gap-20 pt-20 lg:pt-24 justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className={css.imageWrapper}>
          <Image
            src={src}
            loader={() => src}
            unoptimized
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </div>
        <div className={css.right}>
          <span>{ayam.name}</span>
          <span>Rp. {ayam.price[Size]}</span>
          <div className={css.additional}>
            <span>Additional</span>
            <div className={css.sauceVariant}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                No Sauce
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Cheese Sauce
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ""}
              >
                BBQ Sauce
              </div>
              <div
                onClick={() => setSize(3)}
                className={Size === 3 ? css.selected : ""}
              >
                Geprek Sauce
              </div>
              <div
                onClick={() => setSize(4)}
                className={Size === 4 ? css.selected : ""}
              >
                Matah Sauce
              </div>
              <div
                onClick={() => setSize(5)}
                className={Size === 5 ? css.selected : ""}
              >
                Gochujang Sauce
              </div>
              <div
                onClick={() => setSize(6)}
                className={Size === 6 ? css.selected : ""}
              >
                Mozarella
              </div>
              <div
                onClick={() => setSize(7)}
                className={Size === 7 ? css.selected : ""}
              >
                Mayonaise
              </div>
              <div
                onClick={() => setSize(8)}
                className={Size === 8 ? css.selected : ""}
              >
                Blackpepper
              </div>
              <div
                onClick={() => setSize(9)}
                className={Size === 9 ? css.selected : ""}
              >
                Spicy BBQ
              </div>
              <div
                onClick={() => setSize(10)}
                className={Size === 10 ? css.selected : ""}
              >
                Mushroom
              </div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={panahKiri}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity("dec")}
              />
              <span>{Quantity}</span>

              <Image
                src={panahKanan}
                height={20}
                alt=""
                width={20}
                objectFit="contain"
                onClick={() => handleQuantity("inc")}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Tambahkan
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "ayam" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const ayam = await client.fetch(
    `*[_type == "ayam" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      ayam,
    },
  };
}
