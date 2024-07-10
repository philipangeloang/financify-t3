import Link from "next/link";
import React from "react";
import { FaGgCircle } from "react-icons/fa6";
import UserIcon from "../auth/user-icon";
import { getServerAuthSession } from "~/server/auth";

const GlobalNavbar = async () => {
  const session = await getServerAuthSession();
  // mx-auto flex max-w-full items-center justify-between p-4
  // mx-auto flex h-screen max-w-full flex-col  p-4
  return (
    <div
      className={
        !session
          ? "mx-auto flex max-w-full items-center justify-between p-4"
          : "mx-auto flex h-screen max-w-full flex-col  p-4"
      }
    >
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-2xl "
        >
          <FaGgCircle size={35} />
          <p className="font-bold"> financify</p>
        </Link>
      </div>

      {!session ? <UserIcon /> : null}
    </div>
  );
};

export default GlobalNavbar;
