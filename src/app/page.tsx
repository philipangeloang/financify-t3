import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";

// const session = await getServerAuthSession();
// #9FE96E #A4A7F6 #636363 #000000 #FFFFFF

export default async function Home() {
  const session = await getServerAuthSession();

  return <main className="text-center">Test</main>;
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
