import Link from "next/link";
import React from "react";

import UserIcon from "../auth/user-icon";
import { getServerAuthSession } from "~/server/auth";

import { FaGgCircle } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

const GlobalNavbar = async () => {
  const session = await getServerAuthSession();
  // mx-auto flex max-w-full items-center justify-between p-4
  // mx-auto flex h-screen max-w-full flex-col  p-4
  return (
    <div
      className={
        !session
          ? "mx-auto flex max-w-full items-center justify-between p-4"
          : "fixed flex h-full w-64 max-w-full flex-col bg-black"
      }
    >
      {!session ? (
        <Link href="/" className="flex items-center gap-2 text-2xl ">
          <FaGgCircle size={35} />
          <p className="font-bold"> financify</p>
        </Link>
      ) : (
        <>
          <Link
            href="/"
            className="flex items-center gap-2 p-4 text-2xl text-white"
          >
            <FaGgCircle size={35} />
            <p className="font-bold"> financify</p>
          </Link>
          <div className="mt-16 flex flex-col text-white">
            <Link
              href="/overview"
              className="flex cursor-pointer items-center gap-3 px-4 py-5 text-sm transition-all delay-100 ease-in-out hover:bg-main-violet"
            >
              <RxDashboard size={25} />
              Overview
            </Link>
            <Link
              href="/transaction"
              className="flex cursor-pointer items-center gap-3 px-4 py-5 text-sm transition-all delay-100 ease-in-out hover:bg-main-violet"
            >
              <RxDashboard size={25} />
              Transactions
            </Link>
            <Link
              href="scheduled-transaction"
              className="flex cursor-pointer items-center gap-3 px-4 py-5 text-sm transition-all delay-100 ease-in-out hover:bg-main-violet"
            >
              <RxDashboard size={25} />
              Scheduled Transactions
            </Link>
            <Link
              href="account"
              className="flex cursor-pointer items-center gap-3 px-4 py-5 text-sm transition-all delay-100 ease-in-out hover:bg-main-violet"
            >
              <RxDashboard size={25} />
              Accounts
            </Link>
            <Link
              href="business"
              className="flex cursor-pointer items-center gap-3 px-4 py-5 text-sm transition-all delay-100 ease-in-out hover:bg-main-violet"
            >
              <RxDashboard size={25} />
              Businesses
            </Link>
            <Link
              href="debt"
              className="flex cursor-pointer items-center gap-3 px-4 py-5 text-sm transition-all delay-100 ease-in-out hover:bg-main-violet"
            >
              <RxDashboard size={25} />
              Debts
            </Link>
          </div>
        </>
      )}

      {!session ? <UserIcon /> : null}
    </div>
  );
};

export default GlobalNavbar;
