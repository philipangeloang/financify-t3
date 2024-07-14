import { IoFastFoodOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { TbDotsVertical } from "react-icons/tb";

const CategoryManagement = () => {
  return (
    <div className="grid w-full grid-cols-12 gap-10">
      {/* Income Card */}
      <div className="col-span-12 w-full rounded-lg bg-white lg:col-span-6">
        <h1 className="flex w-full items-center justify-between rounded-t-lg bg-main-green p-4 py-2 text-2xl font-bold">
          <p>Income</p>
          <CiCirclePlus size={35} className="cursor-pointer" />
        </h1>

        {/* Temporary */}
        <div className="grid grid-cols-12 gap-5 p-4">
          <div className="col-span-3 flex aspect-square flex-col items-center justify-between gap-2 rounded-md border">
            <div className="flex w-full justify-between">
              <HiMiniXMark
                size={20}
                className="cursor-pointer rounded-tl-md bg-black text-white"
              />
              <TbDotsVertical size={20} className="cursor-pointer" />
            </div>
            <IoFastFoodOutline size={70} />

            <p className="w-full rounded-b-md bg-black p-1 text-center text-xs font-bold text-white">
              Fast Food
            </p>
          </div>

          <div className="col-span-3 flex aspect-square flex-col items-center justify-between gap-2 rounded-md border">
            <div className="flex w-full justify-between">
              <HiMiniXMark
                size={20}
                className="cursor-pointer rounded-tl-md bg-black text-white"
              />
              <TbDotsVertical size={20} className="cursor-pointer" />
            </div>
            <IoFastFoodOutline size={70} />

            <p className="w-full rounded-b-md bg-black p-1 text-center text-xs font-bold text-white">
              Fast Food
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 w-full rounded-lg bg-white lg:col-span-6">
        <h1 className="flex w-full items-center justify-between rounded-t-lg bg-main-violet p-4 py-2 text-2xl font-bold">
          <p>Expense</p>
          <CiCirclePlus size={35} className="cursor-pointer" />
        </h1>

        <div className="grid grid-cols-12 gap-5 p-4">
          <div className="col-span-3 flex aspect-square flex-col items-center justify-between gap-2 rounded-md border">
            <div className="flex w-full justify-between">
              <HiMiniXMark
                size={20}
                className="cursor-pointer rounded-tl-md bg-black text-white"
              />
              <TbDotsVertical size={20} className="cursor-pointer" />
            </div>
            <IoFastFoodOutline size={70} />

            <p className="w-full rounded-b-md bg-black p-1 text-center text-xs font-bold text-white">
              Fast Food
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
