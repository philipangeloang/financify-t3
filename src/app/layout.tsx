import "~/styles/globals.css";
import NavbarProvider from "./_components/auth/navbar-provider";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Financify",
  description: "Manage your finances wwith ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#EAEAEA]">
        <div>
          <NavbarProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </NavbarProvider>
        </div>
      </body>
    </html>
  );
}
