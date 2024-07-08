import Image from "next/image";
import Link from "next/link";

import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs font-semibold">
          See all
        </Link>
      </div>
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
          <FaCircleCheck size={18} />
          <MdCancel size={20} />
        </div>
      </div>
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
          <FaCircleCheck size={18} />
          <MdCancel size={20} />
        </div>
      </div>
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
          <FaCircleCheck size={18} />
          <MdCancel size={20} />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
