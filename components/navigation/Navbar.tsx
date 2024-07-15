import Link from "next/link";
import MobileMenu from "./MobileMenu";

import { FaHome, FaUserFriends } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";
import { RiLoginBoxFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex flex-row items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          Social
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <FaHome size={30} />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <GiThreeFriends size={30} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <CiCirclePlus size={30} />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex items-center bg-slate-100 rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="px-4 py-2 bg-transparent outline-none"
          />
          <FaMagnifyingGlass />
        </div>
      </div>
      <div className="w-[30%] flex justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="hidden md:flex gap-4 cursor-pointer mr-4">
              <FaUserFriends size={30} />
              <AiOutlineMessage size={30} />
              <IoIosNotificationsOutline size={30} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <RiLoginBoxFill size={30} />
              <Link href="/sign-in">Login / Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
