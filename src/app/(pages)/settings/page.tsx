import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/app/_components/ui/tabs";
import UserIcon from "~/app/_components/auth/user-icon";
import CategoryManagement from "~/app/_components/section/category-management";

const Settings = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }
  return (
    <main className="w-full">
      <div className="flex items-center justify-between bg-white p-4 px-10">
        <div className="flex items-center gap-5 text-3xl font-bold">
          {/* <HiMenuAlt2 /> */}
          Settings
        </div>
        <UserIcon />
      </div>
      <Tabs defaultValue="profile">
        <TabsList className="mt-3 w-full justify-start gap-8 bg-[#EAEAEA] p-4 px-10">
          <TabsTrigger className="pb-2" value="profile">
            Profile
          </TabsTrigger>
          <TabsTrigger className="pb-2" value="preferences">
            Preferences
          </TabsTrigger>
          <TabsTrigger className="pb-2" value="categories">
            Categories Management
          </TabsTrigger>
        </TabsList>
        <TabsContent className="px-10 py-3" value="profile">
          Profile
        </TabsContent>
        <TabsContent className="px-10 py-3" value="preferences">
          Preferences
        </TabsContent>
        <TabsContent className="px-10 py-3" value="categories">
          <CategoryManagement />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Settings;
