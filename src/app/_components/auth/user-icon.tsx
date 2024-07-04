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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
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
