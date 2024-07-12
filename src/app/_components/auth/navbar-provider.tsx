import GlobalNavbar from "../section/global-navbar";
import { getServerAuthSession } from "~/server/auth";

const NavbarProvider = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerAuthSession();
  return (
    <>
      {!session ? (
        <>
          <GlobalNavbar />
          {children}
        </>
      ) : (
        <>
          <div className="flex">
            <GlobalNavbar />
            <div className="ml-64 w-full"> {children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarProvider;
