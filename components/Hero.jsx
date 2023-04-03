import React from "react";
import Link from "next/link";
import bannerImage from "../assets/ayam.png";
import Image from "next/image";
import css from "../styles/Banner.module.css";
import { useSession } from "next-auth/react";

export default function Hero() {
  const { data: session } = useSession();
  return (
    <div
      className="grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 mt-16 lg:mt-20"
      id="home"
    >
      <div className="mb-16 text-center lg:mb-0 lg:text-left lg:pl-20">
        <h1 className=" font-bold" id="banner">
          Sensasi Kenikmatan di setiap gigitan{" "}
          <span style={{ color: "var(--themeRed)" }}>Chicken William</span>
        </h1>
        <p className="my-6 text-gray-600 leading-8">
          Setiap hidangan ayam kami disajikan dengan bumbu khas Chicken William
          yang membuatnya sangat lezat dan nikmat. Kami juga menawarkan berbagai
          pilihan saus dan sisi makanan yang akan memuaskan selera Anda.
        </p>
        <Link href="/menupage">
          <button className={`btn ${css.btn}`}>AYO ORDER!</button>
        </Link>
      </div>

      <div>
        <Image src={bannerImage} layout="intrinsic" alt="" />
      </div>
    </div>
  );
}
