"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const DiscordSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("discord");
      }}
      className="h-8 w-full"
    >
      Discord
    </Button>
  );
};

export default DiscordSignin;
