import css from "../styles/Banner.module.css";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../assets/ayam.png";
import { UilPhone } from "@iconscout/react-unicons";
import { useSession } from "next-auth/react";

export default function Banner() {
  const { data: session } = useSession();
  return (
    <div className={css.container}>
      {/* left */}
      <div className={css.leftSide}>
        <div className={css.textBanner}>
          <span>Sensasi kenikmatan</span>
          <span>di setiap gigitan</span>
          <span>
            ayam{" "}
            <span style={{ color: "var(--themeRed)" }}>Chicken William</span>
          </span>
        </div>
        <span className={css.miniText}>
          Setiap hidangan ayam kami disajikan dengan bumbu khas <br /> Chicken
          William yang membuatnya sangat lezat dan <br /> nikmat. Kami juga
          menawarkan berbagai pilihan saus dan <br /> sisi makanan yang akan
          memuaskan selera Anda.
        </span>
        {session ? (
          <Link href="/menupage">
            <button className={`btn ${css.btn}`}>AYO ORDER!</button>
          </Link>
        ) : (
          <Link href="https://chicken-william.vercel.app/api/auth/signin?callbackUrl=https%3A%2F%2Fchicken-william.vercel.app%2Fmenupage">
            <button className={`btn ${css.btn}`}>AYO ORDER!</button>
          </Link>
        )}
      </div>

      {/* right */}
      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={bannerImage} layout="intrinsic" alt="" />
        </div>
        <Link href="https://wa.me/0895700997065?text=Saya mau pesan bang!">
          <div className={css.contactUs}>
            <span>Hubungi Kami</span>
            <div>
              <UilPhone color="white" size="18" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
