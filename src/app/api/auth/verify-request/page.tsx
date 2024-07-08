import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "~/app/_components/ui/button";

const VerifyRequest = async () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <MdOutlineEmail size={80} color="#9FE96E" />
      <p className="my-2 text-5xl font-bold ">Check your email</p>
      <p>A sign in link has been sent to your email address</p>
      <p>Click the link on your email to sign in</p>
      <Button asChild className="my-5 rounded-full bg-black">
        <Link href="/">Go back to home page</Link>
      </Button>
    </div>
  );
};

export default VerifyRequest;
