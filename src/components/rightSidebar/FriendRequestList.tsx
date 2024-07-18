"use client";
import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const acceptRequest = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error("Failed to accept request", error);
    }
  };

  const declineRequest = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error("Failed to decline request", error);
    }
  };

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: string) => state.filter((req) => req.id !== value)
  );
  return (
    <div className="">
      {optimisticRequests.map((request) => (
        <div className="flex justify-between items-center" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.username + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <form action={() => acceptRequest(request.id, request.sender.id)}>
              <button>
                <FaCircleCheck size={18} />
              </button>
            </form>
            <form action={() => declineRequest(request.id, request.sender.id)}>
              <button>
                <MdCancel size={20} />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
