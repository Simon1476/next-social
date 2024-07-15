"use client";

import { deletePost } from "@/lib/actions";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const PostOptions = ({ postId }: { postId: string }) => {
  const [open, setOpen] = useState(false);

  const deletePostWithId = deletePost.bind(null, postId);

  return (
    <div className="relative">
      <HiDotsHorizontal
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute top-4 right-0 flex flex-col gap-2 p-4 w-32 rounded-lg bg-white text-xs font-bold shadow-lg z-40">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostOptions;
