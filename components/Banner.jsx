import css from "../styles/Banner.module.css";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../assets/ayam.png";
import { UilPhone } from "@iconscout/react-unicons";

export default function Banner() {
  return (
    <div className={css.container}>
      {/* left */}
      <div className={css.leftSide}>
        <div className={css.textBanner}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Chicken Wing</span>
          </span>
        </div>
        <span className={css.miniText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Nostrum nesciunt modi rerum quos illum eveniet corporis dolor repellat
          nisi illo?
        </span>
        <Link href="https://wa.me/0895700997065">
          <button className={`btn ${css.btn}`}>AYO ORDER!</button>
        </Link>
      </div>

      {/* right */}
      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={bannerImage} layout="intrinsic" />
        </div>
        <div className={css.contactUs}>
          <span>Hubungi Kami</span>
          <div>
            <UilPhone color="white" size="18" />
          </div>
        </div>
      </div>
    </div>
  );
}
