import { useSession, signIn, signOut } from "next-auth/react";
import css from "../styles/Header.module.css";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="dropdown">
          {" "}
          <div className="profile">
            {" "}
            <Image
              className="dropbtn"
              src={session.user.image}
              width={38}
              height={38}
              alt=""
            />{" "}
            <div className="dropdown-content">
              {" "}
              <ul>
                <li>
                  <span>Settings</span>
                </li>{" "}
                <li>
                  <span>Profiles</span>
                </li>{" "}
                <li onClick={() => signOut()}>
                  <span>Logout</span>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <button className="btn" onClick={() => signIn()}>
        Login
      </button>
    </>
  );
}
