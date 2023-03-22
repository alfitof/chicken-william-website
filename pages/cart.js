import Layout from "../components/layout";
import css from "../styles/Cart.module.css";
import { useStore } from "../store/store";
import { urlFor } from "../lib/client";
import Image from "next/image";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function Cart() {
  const [Order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
  );
  const CartData = useStore((state) => state.cart);
  const removeAyam = useStore((state) => state.removeAyam);
  const [PaymentMethod, setPaymentMethod] = useState(null);
  const handleRemove = (i) => {
    removeAyam(i);
    toast.error("Pesanan dihapus");
  };
  const total = () =>
    CartData.ayams.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleCOD = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.setItem("total", total());
  };
  return (
    <Layout>
      <Head>
        <title>My Cart</title>
      </Head>
      <div className={css.container}>
        <div className={css.detail}>
          <table className={css.table}>
            <thead>
              <th>Ayam</th>
              <th>Nama</th>
              <th>Additional</th>
              <th>Harga</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {CartData.ayams.length > 0 &&
                CartData.ayams.map((ayam, i) => {
                  const src = urlFor(ayam.image).url();
                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          objectFit="cover"
                          width={85}
                          height={85}
                          src={src}
                        />
                      </td>
                      <td>{ayam.name}</td>
                      <td>
                        {ayam.size === 0
                          ? "No Sauce"
                          : ayam.size === 1
                          ? "Cheese Sauce"
                          : ayam.size === 2
                          ? "BBQ Sauce"
                          : ayam.size === 3
                          ? "Geprek Sauce"
                          : ayam.size === 4
                          ? "Matah Sauce"
                          : ayam.size === 5
                          ? "Gochujang Sauce"
                          : ayam.size === 6
                          ? "Mozarella"
                          : ayam.size === 7
                          ? "Blackpepper"
                          : ayam.size === 8
                          ? "Spicy BBQ"
                          : "Mushroom"}
                      </td>
                      <td>{ayam.price}</td>
                      <td>{ayam.quantity}</td>
                      <td>{ayam.quantity * ayam.price}</td>
                      <td
                        style={{
                          color: "red",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleRemove(i)}
                      >
                        X
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.CartDetails}>
            <div>
              <span>Items</span>
              <span>{CartData.ayams.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{total()}</span>
            </div>
          </div>
          {!Order && CartData.ayams.length > 0 ? (
            <div className={css.button}>
              <button className="btn" onClick={handleCOD}>
                Cash on Delivery
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <Toaster />
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod={PaymentMethod}
      />
    </Layout>
  );
}
