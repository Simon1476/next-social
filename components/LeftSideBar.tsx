import Link from "next/link";
import ProfileCard from "./ProfileCard";

import { FaClipboardList, FaCalendarAlt, FaFileVideo } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";
import { IoStorefront, IoListSharp } from "react-icons/io5";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import SponsoredAds from "./SponsoredAds";

const LeftSideBar = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md text-sm text-gray-500">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaClipboardList size={20} />
          <span>My Posts</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <MdLocalActivity size={20} />
          <span>Activity</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <IoStorefront size={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaCalendarAlt size={20} />
          <span>Events</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <BiSolidPhotoAlbum size={20} />
          <span>Albums</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <FaFileVideo size={20} />
          <span>Videos</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <BsNewspaper size={20} />
          <span>News</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <IoListSharp size={20} />
          <span>Lists</span>
        </Link>
        <hr className="w-36 border-t-1 border-gray-50 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <IoMdSettings size={20} />
          <span>Settings</span>
        </Link>
      </div>

      <SponsoredAds size="sm" />
    </div>
  );
};

export default LeftSideBar;
