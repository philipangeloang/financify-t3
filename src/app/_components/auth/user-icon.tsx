import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/app/_components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/app/_components/ui/popover";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { FaAngleDown } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import DiscordSignin from "./discord-signin";
import GithubSignin from "./github-signin";
import GoogleSignin from "./google-signin";
import EmailSignin from "./email-signin";
import { Separator } from "../ui/separator";
import ProviderSignout from "./providers-signout";

const UserIcon = async () => {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="outline">
          <Link href="/">Documentation</Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-main-green text-black hover:bg-main-violet">
              Log in
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center justify-center sm:max-w-[375px]">
            <DialogHeader className="text-center">
              <DialogTitle className="text-3xl">
                Log in to Financify
              </DialogTitle>
            </DialogHeader>
            <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
              <DiscordSignin />
              <GithubSignin />
              <GoogleSignin />
              <Separator className="w-full" />
              <EmailSignin />
              <p className="mt-5 px-5 text-xs text-main-gray">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline">
        <Link href="/">Documentation</Link>
      </Button>
      <Popover>
        <PopoverTrigger className="flex items-center justify-center gap-2">
          <Avatar>
            <AvatarImage src={session.user.image!} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <FaAngleDown />
        </PopoverTrigger>
        <PopoverContent className="w-[225px] p-0">
          <div className="flex flex-col px-3 py-2 text-xs">
            <p className="text-sm font-bold">{session.user.name}</p>
            <p className="text-main-gray">{session.user.email}</p>
          </div>
          <Separator />
          <div className="flex flex-col p-1 text-sm">
            <Link
              className="flex items-center justify-between gap-2 rounded-md p-2 hover:bg-black/10"
              href="/"
            >
              <span>Profile</span>
              <CgProfile size={18} className="text-main-gray" />
            </Link>
            <Link
              className="flex items-center justify-between gap-2 rounded-md p-2 hover:bg-black/10"
              href="/"
            >
              <span>Settings</span>
              <IoSettingsOutline size={18} className="text-main-gray" />
            </Link>
          </div>
          <Separator />
          <div className="flex flex-col p-1 text-sm">
            <Link
              className="flex items-center justify-between gap-2 rounded-md p-2 hover:bg-black/10"
              href="api/auth/signout"
            >
              <span>
                <ProviderSignout />
              </span>
              <MdLogout size={18} className="text-main-gray" />
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserIcon;
