import Link from "next/link";

import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { IoMdSchool, IoIosLink } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs font-semibold">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-sm">@Mina Park</span>
        </div>
        {/* <div className="space-x-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-sm">@Mina Park</span>
        </div> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe
          recusandae cupiditate nihil?
        </p>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt size={16} />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdSchool size={16} />
          <span>
            Went to <b>Seoul Univ</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoBagRemove size={16} />
          <span>
            Works at <b>Samsung</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IoIosLink size={16} />
            <Link href="https://lama.dev" className="text-blue-500">
              simongoose
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="p-2 bg-blue-500 text-white text-sm rounded-md">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
