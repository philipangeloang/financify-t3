import { getServerAuthSession } from "~/server/auth";
import UserIcon from "./user-icon";

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <main className="w-full p-4">
      <div className="mx-auto flex  max-w-screen-2xl items-center justify-between ">
        <div className="text-4xl font-black">LOGO</div>
        <UserIcon />
      </div>
    </main>
  );
};

export default Navbar;
