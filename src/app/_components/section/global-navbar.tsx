import Link from "next/link";
import React from "react";

import UserIcon from "../auth/user-icon";
import NavItems from "./nav-items";

import { getServerAuthSession } from "~/server/auth";
import { BiSolidBlanket } from "react-icons/bi";

const GlobalNavbar = async () => {
  const session = await getServerAuthSession();
  // mx-auto flex max-w-full items-center justify-between p-4
  // mx-auto flex h-screen max-w-full flex-col  p-4
  return (
    <div
      className={
        !session
          ? "mx-auto flex max-w-full items-center justify-between p-4"
          : "fixed flex h-full w-64 flex-col justify-between bg-black"
      }
    >
      {!session ? (
        <Link href="/" className="flex items-center gap-2 text-2xl ">
          <BiSolidBlanket size={25} />
          <p className="font-bold"> financify</p>
        </Link>
      ) : (
        <NavItems />
      )}

      {!session ? <UserIcon /> : null}
    </div>
  );
};

export default GlobalNavbar;
