"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaDiscord } from "react-icons/fa";

const DiscordSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("discord");
      }}
      className="flex h-12 w-full gap-3 bg-[#5869E9] hover:bg-main-violet"
    >
      <FaDiscord size={20} />
      <span>Continue with Discord</span>
    </Button>
  );
};

export default DiscordSignin;
