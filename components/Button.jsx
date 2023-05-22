import { useSession, signIn, signOut } from "next-auth/react";
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
            <div className="dropdown-content drop-shadow-lg">
              {" "}
              <ul>
                <p className="pt-2 font-semibold">{session.user.name}</p>
                <p className="pt-1 text-orange-500 mb-3 text-xs">
                  {session.user.email}
                </p>
                <hr className="mb-2" />
                <li onClick={() => signOut()}>
                  <span className="py-1 pl-1 font-medium">Logout</span>
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
      <button className="btn" id="buttonLog" onClick={() => signIn()}>
        Login
      </button>
    </>
  );
}
