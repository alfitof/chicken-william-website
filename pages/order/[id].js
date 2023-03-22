import { client } from "../../lib/client";
import Layout from "../../components/layout";
import css from "../../styles/Order.module.css";
import { UilBill, UilBox } from "@iconscout/react-unicons";
import Cooking from "../../assets/cooking.png";
import Payment from "../../assets/payment.png";
import Paket from "../../assets/package.png";
import Onway from "../../assets/onway.png";
import Spinner from "../../assets/spinner.svg";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);
  return {
    props: {
      order: order[0],
    },
  };
};

export default function Orders({ order }) {
  useEffect(() => {
    if (order.status > 3) {
      localStorage.clear();
    }
  }, [order]);
  return (
    <Layout>
      <Head>
        <title>Process Order</title>
      </Head>
      <div className={css.container}>
        <span className={css.heading}>Progress Orderan</span>
        <div className={css.details}>
          <div>
            <span>Order ID</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Nama Pemesan</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>No.Telp</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Metode Pembayaran</span>
            <span>
              {order.method === 0
                ? "Cash on delivery (COD)"
                : "Pembayaran Online"}
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>Rp, {order.total}</span>
          </div>
        </div>
        <div className={css.statusContainer}>
          <div className={css.status}>
            <Image src={Payment} width={50} height={50} />
            <span>Pembayaran</span>
            {order.method === 0 ? (
              <span className={css.pending}>Cash On Delivery</span>
            ) : (
              <span className={css.completed}>Completed</span>
            )}
          </div>
          <div className={css.status}>
            <Image src={Cooking} width={50} height={50} />
            <span>Dimasak</span>
            {order.status === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} />
              </div>
            )}

            {order.status > 1 && (
              <span className={css.completed}>Completed</span>
            )}
          </div>
          <div className={css.status}>
            <Image src={Onway} width={100} height={100} />
            <span>OTW</span>
            {order.status === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} />
              </div>
            )}
            {order.status > 2 && (
              <span className={css.completed}>Completed</span>
            )}
          </div>
          <div className={css.status}>
            <Image src={Paket} width={50} height={50} />
            <span>Sampai</span>
            {order.status === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} />
              </div>
            )}
            {order.status > 3 && (
              <span className={css.completed}>Completed</span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
