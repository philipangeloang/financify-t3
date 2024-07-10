import { redirect } from "next/navigation";
import UserIcon from "~/app/_components/auth/user-icon";
import { getServerAuthSession } from "~/server/auth";

const ScheduledTransaction = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }
  return (
    <main className="flex items-center justify-between p-4">
      <div className="text-3xl font-bold">Scheduled Transactions</div>
      <UserIcon />
    </main>
  );
};

export default ScheduledTransaction;
