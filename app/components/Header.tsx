import Image from "next/image";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between w-full px-4"
      style={{ maxWidth: "420px" }}
    >
      <Image src="/LOGO.svg" alt="logo" width={25} height={25} />
      <div className="bg-red-600 px-4 py-1 flex flex-row items-center text-white rounded-md">
        Prihlásiť sa
      </div>
    </header>
  );
};

export default Header;
