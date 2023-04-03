import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import Button from "../components/Button";
import Link from "next/link";
import { useStore } from "../store/store";
import { useState, useEffect } from "react";

export default function Header() {
  const [Order, setOrder] = useState("");
  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);
  const items = useStore((state) => state.cart.ayams.length);
  return (
    <div className={css.header}>
      <Link href="../">
        <div className={css.logo}>
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <span>Chicken William</span>
        </div>
      </Link>

      <ul className={css.menu}>
        <Link href="../">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/menupage">
          <a>
            <li>Menu</li>
          </a>
        </Link>
        <Link href="#">
          <a>
            <li>Contact</li>
          </a>
        </Link>
      </ul>

      <div className={css.navright}>
        <Link href="/cart">
          <a>
            <div className={css.cart}>
              <UilShoppingBag size={35} color="#2e2e2e" />
              <div className={css.badge}>{items}</div>
            </div>
          </a>
        </Link>
        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2e2e2e" />
              {Order != "" && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
        <Button />
      </div>
    </div>
  );
}
