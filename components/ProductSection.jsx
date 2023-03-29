import ProductImage from "../components/ProductImage";
import ProductDetails from "../components/ProductDetails";
import src from "../assets/ayam.png";
import Image from "next/image";
import css from "../styles/Ayam.module.css";

function ProductSection({ productData }) {
  return (
    <div className="flex flex-col justify-center gap-20 items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
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
      <ProductDetails productData={productData} />
    </div>
  );
}

export default ProductSection;
