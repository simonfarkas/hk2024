import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between w-full px-4 mt-4"
      style={{ maxWidth: "420px" }}
    >
      <Link href="/">
        <Image src="/LOGO.svg" alt="logo" width={25} height={25} />
      </Link>
      <div className="bg-red-600 px-4 py-1 flex flex-row items-center text-white rounded-md">
        Prihlásiť sa
      </div>
    </header>
  );
};

export default Header;
