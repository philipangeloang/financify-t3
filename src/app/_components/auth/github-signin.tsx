"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const GithubSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("github");
      }}
      className="h-8 w-full"
    >
      Github
    </Button>
  );
};

export default GithubSignin;
