import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

const VerifyRequest = async () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <MdOutlineEmail size={100} color="#9FE96E" />
      <p className="text-4xl font-bold  ">Check your email</p>
      <p>A sign in link has been sent to your email address</p>
      <p>Click the link on your email to sign in</p>
      <Link href="/">Go back to home page</Link>
    </div>
  );
};

export default VerifyRequest;
