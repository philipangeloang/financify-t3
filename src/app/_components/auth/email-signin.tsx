"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/app/_components/ui/form";
import { Input } from "~/app/_components/ui/input";

import { MdEmail } from "react-icons/md";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email().min(1, {
    message: "Please Enter Your Email",
  }),
});

const EmailSignin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.email);
    const email = values.email;
    await signIn("email", { email });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          type="submit"
          className="flex h-12 w-full gap-3 border border-black/10 hover:bg-main-violet"
        >
          <MdEmail size={20} color="black" />
          <span className="text-black">Continue with Email</span>
        </Button>
      </form>
    </Form>
  );
};

export default EmailSignin;
