"use client";

import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <VscChromeClose color="blue" size={40} />
        ) : (
          <MdMenu color="blue" size={40} />
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-semibold  text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
