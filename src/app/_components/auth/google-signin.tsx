"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const GoogleSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("google");
      }}
      className="bg-main-black h-8 w-full"
    >
      test
    </Button>
  );
};

export default GoogleSignin;
