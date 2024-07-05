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
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import DiscordSignin from "./discord-signin";
import GithubSignin from "./github-signin";
import GoogleSignin from "./google-signin";
import EmailSignin from "./email-signin";

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
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Log in to Financify</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center">
              <DiscordSignin />
              <GithubSignin />
              <GoogleSignin />
              <EmailSignin />
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
        <PopoverContent>
          <Link className="font-bold" href="api/auth/signout">
            <Button> Log out</Button>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserIcon;
