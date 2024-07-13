"use client";

import { HiDotsHorizontal } from "react-icons/hi";
import { FaGrinWink, FaRegThumbsUp } from "react-icons/fa";

import Image from "next/image";

import { Comment, User } from "@prisma/client";
import { useUser } from "@clerk/nextjs";
import { addComment } from "@/lib/actions";

import { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

type Props = {
  comments: CommentWithUser[];
  postId: string;
};

const CommentList = ({ comments, postId }: Props) => {
  const { user } = useUser();

  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");

  const addCommentAction = async () => {
    if (!user || !desc) return;

    addOptimisitcComment({
      id: Math.random().toString(),
      desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        username: "Sending Plz...",
        avatar: user.imageUrl || "/noAvatar.png",
        cover: "",
        name: "",
        surname: "",
        description: "",
        city: "",
        school: "",
        work: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdComment = await addComment(postId, desc);
      setCommentState((prev) => [createdComment, ...prev]);
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  const [optimisticComments, addOptimisitcComment] = useOptimistic(
    commentState,
    (state, value: CommentWithUser) => [value, ...state]
  );
  return (
    <>
      {/* WRITE */}
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "noAvatar.png"}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <form
            action={addCommentAction}
            className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
          >
            <input
              type="text"
              placeholder="enter your comment..."
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDesc(e.target.value)}
            />
            <FaGrinWink
              color="orange"
              size={20}
              className="self-end cursor-pointer"
            />
          </form>
        </div>
      )}
      {optimisticComments.map((comment) => (
        <div className="flex gap-4 justify-between mt-6" key={comment.id}>
          {/* AVATAR */}
          <Image
            src={comment.user.avatar || "noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">
              {comment.user.name && comment.user.surname
                ? comment.user.name + " " + comment.user.surname
                : comment.user.name}
            </span>
            <p>{comment.desc}</p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4 ">
                <FaRegThumbsUp
                  size={16}
                  color="#3D72CC"
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">0 Likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/* ICON */}
          <HiDotsHorizontal />
        </div>
      ))}
    </>
  );
};

export default CommentList;
