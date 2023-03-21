import fitur1 from "../assets/s1.png";
import fitur2 from "../assets/s2.png";
import fitur3 from "../assets/s3.png";
import Image from "next/image";
import css from "../styles/Service.module.css";

export default function Services() {
  return (
    <div>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partners</span>
      </div>

      <div className={css.services}>
        <div className={css.fitur}>
          <div className={css.imageWrapper}>
            <Image src={fitur1} objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, vitae.
          </span>
        </div>
        <div className={css.fitur}>
          <div className={css.imageWrapper}>
            <Image src={fitur2} objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, vitae.
          </span>
        </div>
        <div className={css.fitur}>
          <div className={css.imageWrapper}>
            <Image src={fitur3} objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, vitae.
          </span>
        </div>
      </div>
    </div>
  );
}
