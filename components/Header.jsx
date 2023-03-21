import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
import Button from "../components/Button";
import Link from "next/link";

export default function Header() {
  return (
    <div className={css.header}>
      <Link href="/">
        <div className={css.logo}>
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <span>Chicken William</span>
        </div>
      </Link>

      <ul className={css.menu}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="#">
          <li>Menu</li>
        </Link>
        <Link href="#">
          <li>Contact</li>
        </Link>
      </ul>

      <div className={css.navright}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2e2e2e" />
          <div className={css.badge}>1</div>
        </div>
        <Button />
      </div>
    </div>
  );
}
