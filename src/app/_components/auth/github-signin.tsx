"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

const GithubSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("github", { callbackUrl: "/overview" });
      }}
      className="flex h-12 w-full gap-3 bg-black hover:bg-main-violet"
    >
      <FaGithub size={20} />
      <span>Continue with Github</span>
    </Button>
  );
};

export default GithubSignin;
