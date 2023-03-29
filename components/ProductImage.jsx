import { useState, useRef } from "react";
import Image from "next/image";
import src from "../assets/ayam.png";

function ProductImage({ images }) {
  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-96">
        <Image
          src={src}
          alt="a"
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
}

export default ProductImage;
