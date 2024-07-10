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
            <div className="w-[300px]">
              <GlobalNavbar />
            </div>
            <div className="w-[calc(100%-300px)]"> {children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarProvider;
