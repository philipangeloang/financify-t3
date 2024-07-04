"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const GithubSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("github");
      }}
      className="bg-main-black h-8 w-full"
    >
      test
    </Button>
  );
};

export default GithubSignin;
