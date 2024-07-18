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

const CreateCategory = () => {
  const [icon, setIcon] = useState("");

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
                <div className="space-y-1">
                  <Label htmlFor="icon">Icon</Label>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Input id="icon" placeholder="Choose Icon" />
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full px-4">
                        <DrawerHeader>
                          <DrawerTitle>Choose Icon</DrawerTitle>
                          <DrawerDescription>
                            Click your desired icon of choosing to describe the
                            cateogry
                          </DrawerDescription>
                        </DrawerHeader>
                        Contents
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
