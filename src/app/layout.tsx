import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import GlobalNavbar from "./_components/auth/global-navbar";

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
      <body>
        <GlobalNavbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
