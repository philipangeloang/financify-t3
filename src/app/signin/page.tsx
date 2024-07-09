import * as React from "react";
import DiscordSignin from "../_components/auth/discord-signin";
import GithubSignin from "../_components/auth/github-signin";
import GoogleSignin from "../_components/auth/google-signin";
import { Separator } from "../_components/ui/separator";
import EmailSignin from "../_components/auth/email-signin";

export default function Signin() {
  return (
    <div className="h-screen w-full p-4">
      <div className="relative mx-auto mt-28 flex max-w-screen-2xl flex-col items-center justify-center">
        <div className="flex w-[375px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="mb-5 text-3xl font-bold">Log in to Financify</h1>
          <DiscordSignin />
          <GithubSignin />
          <GoogleSignin />
          <Separator />
          <EmailSignin />
          <p className="mt-5 px-5 text-xs text-main-gray">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
