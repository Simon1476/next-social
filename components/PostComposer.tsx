import Image from "next/image";
import { BsEmojiKissFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { FaPoll } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";

const PostComposer = () => {
  return (
    <div className="flex justify-between gap-4 p-4 shadow-md bg-white rounded-lg text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/7654136/pexels-photo-7654136.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}

        <div className="flex gap-4">
          <textarea
            placeholder="what are you thinking?"
            name="desc"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <BsEmojiKissFill color="orange" size={20} className="self-end" />
        </div>
        {/* POST OPTIONS */}

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <IoMdPhotos size={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaVideo size={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaPoll size={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <IoCalendarNumberOutline size={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
