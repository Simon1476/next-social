"use client";
import { useAuth } from "@clerk/nextjs";
import { FaRegThumbsUp, FaCommentDots, FaShare } from "react-icons/fa";
import { useOptimistic, useState } from "react";
import { toggleLikeStatus } from "@/lib/actions";

type LikeState = {
  likeCount: number;
  isLiked: boolean;
};

type Props = {
  postId: string;
  likes: string[];
  commentNumber: number;
};

const PostInteraction = ({ postId, likes, commentNumber }: Props) => {
  const { userId, isLoaded } = useAuth();

  const [likeState, setLikeState] = useState<LikeState>({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, toggleOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    toggleOptimisticLike("");
    try {
      toggleLikeStatus(postId);
      setLikeState((prevState) => ({
        likeCount: prevState.isLiked
          ? prevState.likeCount - 1
          : prevState.likeCount + 1,
        isLiked: !prevState.isLiked,
      }));
    } catch (error) {}
  };
  return (
    <div className="flex justify-between items-center text-sm my-4">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <form action={likeAction}>
            <button>
              {optimisticLike.isLiked ? (
                <FaRegThumbsUp
                  size={16}
                  color="red"
                  className="cursor-pointer"
                />
              ) : (
                <FaRegThumbsUp
                  size={16}
                  color="#3D72CC"
                  className="cursor-pointer"
                />
              )}
            </button>
          </form>

          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {optimisticLike.likeCount}
            <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <FaCommentDots size={16} color="#3D72CC" className="cursor-pointer" />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {commentNumber} <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <FaShare size={16} className="cursor-pointer" color="#3D72CC" />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span className="hidden md:inline"> Share</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;
