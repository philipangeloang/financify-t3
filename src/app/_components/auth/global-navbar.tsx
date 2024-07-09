import Link from "next/link";
import React from "react";
import { FaGgCircle } from "react-icons/fa6";
import UserIcon from "./user-icon";

const GlobalNavbar = () => {
  return (
    <div className="w-full p-4">
        <div className="mx-auto flex  max-w-screen-2xl items-center justify-between">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-2xl "
      >
        <FaGgCircle size={35} />
        <p className="font-bold"> financify</p>
      </Link>
      <UserIcon />
    </div>
    </div>
  
  );
};

export default GlobalNavbar;
