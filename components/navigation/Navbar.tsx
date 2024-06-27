import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { FaHome } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="h-24 flex flex-row items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          Social
        </Link>
      </div>
      <div className="hidden md:flex w-[50%]">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <FaHome />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <GiThreeFriends />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <CiCirclePlus />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="w-[30%] flex justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
