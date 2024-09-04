import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="flex items-center bg-red-600 h-10 rounded-t-md mt-20 bottom-0 px-2 py-4 sticky"
      style={{ maxWidth: "420px" }}
    >
      <div className='flex flex-row justify-between'>
        <Image src="/home.svg" alt="logo" width={25} height={25} />
      </div>
    </div>
  );
};

export default Navbar;
