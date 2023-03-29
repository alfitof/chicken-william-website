import css from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineClock } from "react-icons/hi";
import { urlFor } from "../lib/client";

export default function Menu({ ayams }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make you fall in love</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-14">
        {ayams.map((ayam, id) => {
          const src = urlFor(ayam.image).url();
          return (
            <Link href={`./ayam/${ayam.slug.current}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md relative hover:shadow-lg hover:-translate-y-2 transition ease-out duration-300">
                <img
                  src={src}
                  loader={() => src}
                  className="w-full h-32 sm:h-48 object-cover"
                  alt=""
                />
                <div className="flex flex-col m-4">
                  <span className="font-bold">{ayam.name}</span>
                  <span className="text-gray-500 text-sm">
                    Rp, {ayam.price[0]}
                  </span>
                </div>
                <span className="flex gap-1 bg-gray-100 text-gray-400 text-xs uppercase font-normal rounded-lg px-2 py-1 absolute top-1 left-1">
                  <HiOutlineClock size={16} />
                  15 mins
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
