"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const ProviderSignout = () => {
  return (
    <Button
      onClick={async () => {
        await signOut();
      }}
      className="bg-main-black h-8 w-full"
    >
      test
    </Button>
  );
};

export default ProviderSignout;
