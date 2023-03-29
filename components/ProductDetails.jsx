import { useState } from "react";
import BackToProductButton from "../components/BackToProductButton";
import ProductInfo from "../components/ProductInfo";
import css from "../styles/Ayam.module.css";
function ProductDetails({ productData }) {
  return (
    <div
      id="detail"
      className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-2xl mx-auto space-y-4 min-h-128"
    >
      <BackToProductButton />
      <ProductInfo title="ANJOY" description="ANJOY" price="20000" />
      <div className={css.additional}>
        <span>Additional</span>
        <div className={css.sauceVariant}>
          <div>No Sauce</div>
          <div>Cheese Sauce</div>
          <div>BBQ Sauce</div>
          <div>Geprek Sauce</div>
          <div>Matah Sauce</div>
          <div>Gochujang Sauce</div>
          <div>Mozarella</div>
          <div>Mayonaise</div>
          <div>Blackpepper</div>
          <div>Spicy BBQ</div>
          <div>Mushroom</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
