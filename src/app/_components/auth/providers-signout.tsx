"use client";
import { signOut } from "next-auth/react";

const ProviderSignout = () => {
  return (
    <p
      onClick={async () => {
        await signOut({ callbackUrl: "/" });
      }}
      className="bg-main-black w-full"
    >
      Log out
    </p>
  );
};

export default ProviderSignout;
