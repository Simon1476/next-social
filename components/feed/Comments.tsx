import Image from "next/image";
import { FaGrinWink, FaRegThumbsUp } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26646646/pexels-photo-26646646.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="enter your comment..."
            className="bg-transparent outline-none flex-1"
          />
          <FaGrinWink color="orange" size={20} className="self-end" />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR */}
        <Image
          src="https://images.pexels.com/photos/26646646/pexels-photo-26646646.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        {/* DESC */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Alex Kim</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            unde officiis vero enim id, quasi a praesentium hic soluta, qui
            fugiat aperiam veritatis maiores ut quibusdam, debitis cupiditate!
            Similique, ipsum!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4 ">
              <FaRegThumbsUp
                size={16}
                color="#3D72CC"
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>
            <div>Reply</div>
          </div>
        </div>
        {/* ICON */}
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

export default Comments;
