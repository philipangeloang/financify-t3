"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGgCircle } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import { IoBusinessOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet, MdOutlineLogout } from "react-icons/md";
import { RiHandCoinLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbCalendarDue } from "react-icons/tb";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col text-white">
        <Link
          href="/"
          className="flex items-center gap-2 p-4 text-2xl text-white"
        >
          <FaGgCircle size={35} />
          <p className="font-bold"> financify</p>
        </Link>
        <Link
          href="/overview"
          className="group mt-9 flex cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/overview"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <RxDashboard size={25} />
          Overview
        </Link>
        <Link
          href="/transaction"
          className="group flex cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/transaction"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <RiMoneyDollarCircleLine size={25} />
          Transactions
        </Link>
        <Link
          href="/scheduled-transaction"
          className="group flex cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/scheduled-transaction"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <RiHandCoinLine size={25} />
          Scheduled Transactions
        </Link>
        <Link
          href="/account"
          className="group flex cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/account"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <MdOutlineAccountBalanceWallet size={25} />
          Accounts
        </Link>
        <Link
          href="/business"
          className="group flex cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/business"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <IoBusinessOutline size={25} />
          Businesses
        </Link>
        <Link
          href="/debt"
          className="group flex  cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/debt"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <TbCalendarDue size={25} />
          Debts
        </Link>
        <Link
          href="/profile/settings"
          className="group flex  cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/profile/settings"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <IoSettingsOutline size={25} />
          Settings
        </Link>
        <Link
          href="/documentation"
          className="group flex  cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white/90 hover:text-white/100"
        >
          <div
            className={
              pathname === "/documentation"
                ? "absolute right-0 h-10 w-1 bg-main-violet group-hover:block"
                : "absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"
            }
          />
          <HiOutlineSupport size={25} />
          Support
        </Link>
      </div>
      <div>
        <Link
          href="/api/auth/signout"
          className="mt-16hover:text-white/100 group  flex cursor-pointer items-center gap-3 px-4 py-5 text-sm text-white text-white/90"
        >
          <div className="absolute right-0 hidden h-10 w-1 bg-main-green group-hover:block"></div>
          <MdOutlineLogout size={25} />
          Log Out
        </Link>
      </div>
    </>
  );
};

export default NavItems;
