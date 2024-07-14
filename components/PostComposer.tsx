"use client";

import Image from "next/image";
import { BsEmojiKissFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { FaPoll } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";

const PostComposer = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="flex justify-between gap-4 p-4 shadow-md bg-white rounded-lg text-sm">
      {/* AVATAR */}
      {user && (
        <Image
          src={user?.imageUrl || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      )}

      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            placeholder="what are you thinking?"
            name="desc"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div>
            <BsEmojiKissFill color="orange" size={20} className="self-end" />
            <AddPostButton />
          </div>
        </form>
        {/* POST OPTIONS */}

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <IoMdPhotos size={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

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
