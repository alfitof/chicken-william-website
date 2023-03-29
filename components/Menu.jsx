import css from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";

export default function Menu({ ayams }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make you fall in love</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {ayams.map((ayam, id) => {
          const src = urlFor(ayam.image).url();
          return (
            <div className={css.ayam} key={id}>
              <Link href={`./ayam/${ayam.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image
                    src={src}
                    loader={() => src}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </Link>
              <span>{ayam.name}</span>
              <span>Rp, {ayam.price[0]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
