import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span>Chicken William</span>
      </div>

      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={css.navright}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2e2e2e" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
}
