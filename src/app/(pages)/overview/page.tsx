import { redirect } from "next/navigation";
import UserIcon from "~/app/_components/auth/user-icon";
import { getServerAuthSession } from "~/server/auth";

const Overview = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }
  return (
    <main className="w-full p-4">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">Dashboard</div>
        <UserIcon />
      </div>
      <p className="h-80">est</p>
      <p className="h-80">est</p>
      <p className="h-80">est</p>
    </main>
  );
};

export default Overview;
