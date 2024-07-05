"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const GoogleSignin = () => {
  return (
    <Button
      onClick={async () => {
        await signIn("google");
      }}
      className="h-8 w-full"
    >
      Google
    </Button>
  );
};

export default GoogleSignin;
