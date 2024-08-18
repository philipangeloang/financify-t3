/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CiCirclePlus } from "react-icons/ci";
import { Button } from "~/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/app/_components/ui/dialog";
import { Input } from "~/app/_components/ui/input";
import { Label } from "~/app/_components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/app/_components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/app/_components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/app/_components/ui/drawer";
import { useState } from "react";

import { FaBriefcase, FaPiggyBank, FaUserShield } from "react-icons/fa";
import {
  FaSackDollar,
  FaLightbulb,
  FaGasPump,
  FaBasketShopping,
  FaTrainSubway,
  FaShieldHeart,
} from "react-icons/fa6";
import { TbPencilDollar } from "react-icons/tb";
import { MdAutoGraph } from "react-icons/md";
import { BsFillHouseUpFill } from "react-icons/bs";
import { IoStorefront } from "react-icons/io5";
import { RiGovernmentFill } from "react-icons/ri";
import { RiBankCardFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbHeartDollar } from "react-icons/tb";
import { PiHouseLineFill } from "react-icons/pi";
import { BsTrainLightrailFrontFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoFastFood } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
import { PiMusicNotesFill } from "react-icons/pi";
import { BsLaptopFill } from "react-icons/bs";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaFerry } from "react-icons/fa6";
import { FaChampagneGlasses } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import { FaDice } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { GiBabyBottle } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { MdLocalGroceryStore } from "react-icons/md";
import { BiSolidShoppingBag } from "react-icons/bi";
import { MdCarRepair } from "react-icons/md";
import { BsCarFrontFill } from "react-icons/bs";
import { IoMdBus } from "react-icons/io";
import { LiaIconsSolid } from "react-icons/lia";

const icons = [
  { icon: <MdLocalGroceryStore size={30} />, name: "Local Grocery Store" },
  { icon: <BiSolidShoppingBag size={30} />, name: "Shopping Bag" },
  { icon: <MdCarRepair size={30} />, name: "Car Repair" },
  { icon: <BsCarFrontFill size={30} />, name: "Car Front Fill" },
  { icon: <IoMdBus size={30} />, name: "Bus" },
  { icon: <FaBriefcase size={30} />, name: "Briefcase" },
  { icon: <FaPiggyBank size={30} />, name: "Piggy Bank" },
  { icon: <FaUserShield size={30} />, name: "User Shield" },
  { icon: <FaSackDollar size={30} />, name: "Sack Dollar" },
  { icon: <FaLightbulb size={30} />, name: "Lightbulb" },
  { icon: <FaGasPump size={30} />, name: "Gas Pump" },
  { icon: <FaBasketShopping size={30} />, name: "Basket Shopping" },
  { icon: <FaTrainSubway size={30} />, name: "Train Subway" },
  { icon: <FaShieldHeart size={30} />, name: "Shield Heart" },
  { icon: <TbPencilDollar size={30} />, name: "Pencil Dollar" },
  { icon: <MdAutoGraph size={30} />, name: "Auto Graph" },
  { icon: <BsFillHouseUpFill size={30} />, name: "Fill House Up Fill" },
  { icon: <IoStorefront size={30} />, name: "Storefront" },
  { icon: <RiGovernmentFill size={30} />, name: "Government Fill" },
  { icon: <RiBankCardFill size={30} />, name: "Bank Card Fill" },
  { icon: <BsBank2 size={30} />, name: "Bank2" },
  {
    icon: <RiMoneyDollarCircleFill size={30} />,
    name: "Money Dollar Circle Fill",
  },
  { icon: <TbHeartDollar size={30} />, name: "Heart Dollar" },
  { icon: <PiHouseLineFill size={30} />, name: "House Line Fill" },
  {
    icon: <BsTrainLightrailFrontFill size={30} />,
    name: "Train Lightrail Front Fill",
  },
  { icon: <GiElectric size={30} />, name: "Electric" },
  { icon: <PiBowlFoodFill size={30} />, name: "Bowl Food Fill" },
  { icon: <IoFastFood size={30} />, name: "Fast Food" },
  { icon: <IoShieldCheckmark size={30} />, name: "Shield Checkmark" },
  { icon: <GiHealthNormal size={30} />, name: "Health Normal" },
  { icon: <MdHealthAndSafety size={30} />, name: "Health and Safety" },
  { icon: <FaHospital size={30} />, name: "Hospital" },
  { icon: <FaBookOpen size={30} />, name: "Book Open" },
  { icon: <FaBook size={30} />, name: "Book" },
  { icon: <MdCastForEducation size={30} />, name: "Cast for Education" },
  { icon: <FaGraduationCap size={30} />, name: "Graduation Cap" },
  { icon: <IoAirplane size={30} />, name: "Airplane" },
  { icon: <BiSolidCameraMovie size={30} />, name: "Camera Movie" },
  { icon: <RiMovie2Fill size={30} />, name: "Movie 2 Fill" },
  { icon: <BiSolidMoviePlay size={30} />, name: "Movie Play" },
  { icon: <FaTshirt size={30} />, name: "Tshirt" },
  { icon: <RiPlantFill size={30} />, name: "Plant Fill" },
  { icon: <FaNoteSticky size={30} />, name: "Note Sticky" },
  { icon: <PiMusicNotesFill size={30} />, name: "Music Notes Fill" },
  { icon: <BsLaptopFill size={30} />, name: "Laptop Fill" },
  { icon: <MdOutlineSmartphone size={30} />, name: "Outline Smartphone" },
  { icon: <FaFerry size={30} />, name: "Ferry" },
  { icon: <FaChampagneGlasses size={30} />, name: "Champagne Glasses" },
  { icon: <FaGamepad size={30} />, name: "Gamepad" },
  { icon: <FaDice size={30} />, name: "Dice" },
  { icon: <MdPets size={30} />, name: "Pets" },
  { icon: <FaGift size={30} />, name: "Gift" },
  { icon: <FaHeart size={30} />, name: "Heart" },
  { icon: <FaNewspaper size={30} />, name: "Newspaper" },
  { icon: <GiBabyBottle size={30} />, name: "Baby Bottle" },
  { icon: <FaBowlFood size={30} />, name: "Bowl Food" },
  { icon: <BsTelephoneFill size={30} />, name: "Telephone Fill" },
  { icon: <FaTrophy size={30} />, name: "Trophy" },
  { icon: <IoIosConstruct size={30} />, name: "Ios Construct" },
  { icon: <CgGym size={30} />, name: "Gym" },
];

const CreateCategory = () => {
  const [icon, setIcon] = useState<React.ReactElement<any, any> | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CiCirclePlus size={35} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="w-[425px] px-4 py-10">
        <Tabs defaultValue="category">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="category">Category</TabsTrigger>
            <TabsTrigger value="subcategory">Subcategory</TabsTrigger>
          </TabsList>
          <TabsContent value="category">
            <Card>
              <CardHeader>
                <CardTitle>Add New Category</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Category Name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="type">Type</Label>
                  <Input id="type" placeholder="Category Type" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="icon">Icon</Label>
                  <Drawer>
                    {icon === null ? (
                      <DrawerTrigger>
                        <div className="flex aspect-square w-28 flex-col items-center justify-center border border-dotted border-main-gray p-4 text-center text-main-gray">
                          <LiaIconsSolid size={30} />
                          <p className="text-xs">Choose Icon</p>
                        </div>
                      </DrawerTrigger>
                    ) : (
                      <DrawerTrigger>
                        <div className="flex aspect-square w-28 flex-col items-center justify-center border border-dotted border-main-gray p-4 text-center">
                          {icon}
                        </div>
                      </DrawerTrigger>
                    )}
                    <DrawerContent>
                      <div className="mx-auto w-full px-4">
                        <DrawerHeader>
                          <DrawerTitle>Choose Icon</DrawerTitle>
                          <DrawerDescription>
                            Click your desired icon of choosing to describe the
                            cateogry
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="grid grid-cols-12 px-4">
                          {icons.map((icon, index) => (
                            <DrawerClose
                              key={index}
                              onClick={() => setIcon(icon.icon)}
                              className="mx-auto"
                            >
                              <div className=" cursor-pointer p-4 text-center">
                                {icon.icon}
                              </div>
                            </DrawerClose>
                          ))}
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                  {/* End of Drawer */}
                </div>
              </CardContent>
              <CardFooter>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="subcategory">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you will be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategory;
