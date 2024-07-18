"use client";

import { toggleFollowStatus, toggleBlockStatus } from "@/lib/actions";
import { useOptimistic, useState } from "react";

type UserState = {
  following: boolean;
  blocked: boolean;
  followingRequestSent: boolean;
};

type Props = {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: Props) => {
  const [userState, setUserState] = useState<UserState>({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingRequestSent:
              !state.following && !state.followingRequestSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  const [isProcessing, setIsProcessing] = useState(false);

  const followAction = async () => {
    switchOptimisticState("follow");
    setIsProcessing(true);
    try {
      await toggleFollowStatus(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {
      console.error("Failed to toggle follow status:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const blockAction = async () => {
    switchOptimisticState("block");
    setIsProcessing(true);
    try {
      await toggleBlockStatus(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      // Handle the error, possibly reverting the optimistic update
      console.error("Failed to toggle block status:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <form action={followAction}>
        <button
          disabled={isProcessing}
          className="w-full p-2 bg-blue-500 text-white text-sm rounded-md"
        >
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={blockAction} className="self-end">
        <button disabled={isProcessing}>
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
