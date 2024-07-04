"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const DiscordSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("discord");
      }}
      className="bg-main-black h-8 w-full"
    >
      test
    </Button>
  );
};

export default DiscordSignin;
