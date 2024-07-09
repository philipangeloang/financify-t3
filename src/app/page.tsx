import Link from "next/link";

import { MdOutlineCalendarToday } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { VscGraphLine } from "react-icons/vsc";
import { PiGlobeLight } from "react-icons/pi";

import { Button } from "./_components/ui/button";
import { FaGgCircle } from "react-icons/fa6";
import UserIcon from "./_components/auth/user-icon";

// const session = await getServerAuthSession();
// #9FE96E #A4A7F6 #636363 #000000 #FFFFFF

export default async function Home() {
  return (
    <main className="w-full p-4">
      {/* Hero */}
      <div className="relative mx-auto mt-16 flex max-w-screen-2xl flex-col items-center justify-center">
        <div className="rounded-full bg-black/5 px-2 py-1 text-sm">
          v0.1 - Initial Application Launch
        </div>
        <div className="relative mt-8 text-center text-[3.25rem] leading-[4.5rem]">
          <PiGlobeLight
            size={35}
            className="absolute left-[-5rem] top-[-2rem] hidden rotate-[-12deg] rounded-md bg-black/10 p-1 md:block"
          />
          <LuUsers2
            size={35}
            className="absolute bottom-[-8rem] left-[-8rem] hidden rotate-[-12deg] rounded-md bg-black/10 p-1 md:block"
          />
          <MdOutlineCalendarToday
            size={35}
            className="absolute right-[-7rem] top-[1rem] hidden rotate-[12deg] rounded-md bg-black/10 p-1 md:block"
          />
          <VscGraphLine
            size={35}
            className="absolute bottom-[-11rem] right-[-3rem] hidden rotate-[12deg] rounded-md bg-black/10 p-1 md:block"
          />
          <div>
            Manage your <br /> finances with{" "}
            <span className="rounded-full shadow-md shadow-main-green">
              ease
            </span>
          </div>
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

        <img src="/home-temp-image.jpg" className="w-full bg-cover pt-20" />
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
