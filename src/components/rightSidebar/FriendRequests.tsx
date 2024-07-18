import Link from "next/link";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs font-semibold">
          See all
        </Link>
      </div>
      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;
