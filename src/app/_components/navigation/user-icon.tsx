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

const UserIcon = async () => {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="outline">
          <Link href="/">Documentation</Link>
        </Button>
        <Button
          asChild
          className="bg-main-green text-black hover:bg-main-violet"
        >
          <Link href="api/auth/signin">Log in</Link>
        </Button>
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
