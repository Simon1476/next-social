import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegThumbsUp, FaCommentDots, FaShare } from "react-icons/fa";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/24244035/pexels-photo-24244035.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-md">Alex Johnson</span>
        </div>
        <HiDotsHorizontal />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam
          accusamus. Reiciendis molestiae aperiam sapiente, optio, itaque
          provident eos facilis deserunt vel doloribus minus quo illo iste ut
          placeat recusandae.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex justify-between items-center text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <FaRegThumbsUp
              size={16}
              color="#3D72CC"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <FaCommentDots
              size={16}
              color="#3D72CC"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <FaShare size={16} className="cursor-pointer" color="#3D72CC" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
