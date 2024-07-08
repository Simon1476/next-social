import Image from "next/image";
import Link from "next/link";

import { IoIosGift } from "react-icons/io";
const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <span className="text-gray-500">Birthdays</span>
      <div className="flex justify-between items-center">
        <div className="flex  items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25578495/pexels-photo-25578495.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Emma Davis</span>
        </div>
        <div className="flex gap-3 items-center">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg ">
        <IoIosGift size={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 7 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
