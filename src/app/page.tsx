import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { Button } from "./_components/ui/button";

// const session = await getServerAuthSession();
// #9FE96E #A4A7F6 #636363 #000000 #FFFFFF

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="w-full p-4">
      <div className="mx-auto mt-24 flex max-w-screen-2xl flex-col items-center justify-center">
        <div className="rounded-full bg-black/5 px-2 py-1 text-sm">
          v0.1 - Initial Application Launch
        </div>
        <div className="mt-8 text-center text-[3.25rem] leading-[4.5rem]">
          Manage your <br /> finances with ease
        </div>
        <div className="mt-3 text-center">
          Revolutionize finance management. Track everything religiously. <br />{" "}
          Take control and make perfect plans financially.
        </div>
        <Button
          asChild
          className="mt-10 bg-main-green text-black hover:bg-main-violet"
        >
          <Link href="api/auth/signin">Start for free</Link>
        </Button>
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   return (
//     <div className="w-full max-w-xs">
//       <CreatePost />
//     </div>
//   );
// }
