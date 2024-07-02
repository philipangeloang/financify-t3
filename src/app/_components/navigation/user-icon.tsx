import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const UserIcon = async () => {
  const session = await getServerAuthSession();
  console.log(session?.user.image);
  if (!session?.user) {
    return (
      <Link className="font-bold" href="api/auth/signin">
        Sign in
      </Link>
    );
  }

  return (
    <div>
      {/* <Image alt="icon" height={30} width={30} src={session.user.image} /> */}
      <Link className="font-bold" href="api/auth/signout">
        Sign out
      </Link>
    </div>
  );
};

export default UserIcon;
