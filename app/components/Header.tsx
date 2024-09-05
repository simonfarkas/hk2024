import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Header = ({
  showLogin = true,
}: {
  showLogin?: boolean;
}) => {
  const token = localStorage.getItem("token");
  return (
    <header
      className="flex flex-row justify-between items-center w-full px-4 mt-4"
      style={{ maxWidth: "420px" }}
    >
      <Link href="/">
        <Image src="/LOGO.svg" alt="logo" width={25} height={25} />
      </Link>
      {showLogin && !token && (
        <Link href="/prihlasenie">
          <div className="bg-red-600 px-4 py-2 flex flex-row items-center text-white rounded-md">
            Prihlásiť sa
          </div>
        </Link>
      )}
      {token && (
        <Link href="/profil">
          <div className="bg-red-600 px-4 py-2 flex flex-row items-center text-white rounded-md">
            <FaUser />
          </div>
        </Link>
      )}
    </header>
  );
};

export default Header;
