import UserIcon from "./user-icon";
import { FaGgCircle } from "react-icons/fa";

const Navbar = async () => {
  return (
    <main className="w-full p-4 pt-7">
      <div className="mx-auto flex  max-w-screen-xl items-center justify-between ">
        <div className="flex items-center justify-center gap-2 text-2xl">
          <FaGgCircle size={35} />
          <span className="font-bold"> financify</span>
        </div>
        <UserIcon />
      </div>
    </main>
  );
};

export default Navbar;
