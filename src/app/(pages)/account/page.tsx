import { redirect } from "next/navigation";
import UserIcon from "~/app/_components/auth/user-icon";
import { getServerAuthSession } from "~/server/auth";

const Account = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }
  return (
    <main className="w-full">
      <div className="flex items-center justify-between bg-white p-4 px-10">
        <div className="flex items-center gap-5 text-3xl font-bold">
          {/* <HiMenuAlt2 /> */}
          Accounts
        </div>
        <UserIcon />
      </div>

      <div className="grid grid-cols-12 gap-10 p-10">
        <div className="col-span-2 h-64 rounded-xl bg-main-green"> te</div>
        <div className="col-span-2 h-64 rounded-xl bg-main-violet"> te</div>
        <div className="col-span-2 h-64 rounded-xl bg-black text-white">te</div>
        <div className="col-span-6 h-64 rounded-xl bg-black text-white">te</div>
      </div>
    </main>
  );
};

export default Account;
