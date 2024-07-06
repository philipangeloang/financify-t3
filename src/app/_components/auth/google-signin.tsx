"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

const GoogleSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("google");
      }}
      className="flex h-12 w-full gap-3 bg-[#E74133] hover:bg-main-violet"
    >
      <FaGoogle size={20} />
      <span>Continue with Google</span>
    </Button>
  );
};

export default GoogleSignin;
