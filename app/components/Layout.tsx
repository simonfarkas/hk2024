import Image from "next/image";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({
  children,
  showNavbar,
  showVectors = false,
  showLogin = true,
}: {
  children: React.ReactNode;
  showNavbar: boolean;
  showVectors: boolean;
  showLogin?: boolean;
}) => {
  return (
    <main className="h-screen flex flex-col bg-white justify-between relative">
      {showVectors && (
        <>
          <div className="absolute top-0 right-10">
            <Image src="/Vector 3.svg" alt="vector3" width={300} height={300} />
          </div>
          <div className="absolute -top-[200px] right-0">
            <Image src="/Vector 2.svg" alt="vector2" width={300} height={300} />
          </div>
          <div className="absolute -bottom-0 left-0">
            <Image src="/Vector 1.svg" alt="vector1" width={300} height={300} />
          </div>
        </>
      )}
      <Header showLogin={showLogin} />
      {children}
      {showNavbar && <Navbar />}
    </main>
  );
};

export default Layout;
