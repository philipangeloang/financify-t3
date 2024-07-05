"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

const EmailSignin = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Input
        placeholder="enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        onClick={async () => {
          await signIn("email", { email });
        }}
        className=" h-8 w-full"
      >
        Continue with Email
      </Button>
    </>
  );
};

export default EmailSignin;
