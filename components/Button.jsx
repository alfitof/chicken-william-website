import { useSession, signIn, signOut } from "next-auth/react";
import css from "../styles/Header.module.css";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div class="dropdown">
          {" "}
          <div class="profile">
            {" "}
            <Image
              class="dropbtn"
              src={session.user.image}
              width={38}
              height={38}
            />{" "}
            <div class="dropdown-content">
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
