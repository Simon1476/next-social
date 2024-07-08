import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Link from "next/link";

import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { IoMdSchool, IoIosLink } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId, // 현재 로그인한 계정의 아이디
        blockedId: user.id, // 현재 프로필 페이지 계정의 아이디
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId, // 현재 로그인한 계정의 아이디
        followingId: user.id, // 현재 프로필 페이지 계정의 아이디
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);

    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId, // 현재 로그인한 계정의 아이디
        receiverId: user.id, // 현재 프로필 페이지 계정의 아이디
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs font-semibold">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {" "}
            {user.name && user.surname
              ? user.username + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {/* <div className="space-x-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-sm">@Mina Park</span>
        </div> */}
        {user.description && <p>{user.description}</p>}

        {user.city && (
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={16} />
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <IoMdSchool size={16} />
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <IoBagRemove size={16} />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex items-center gap-1">
              <IoIosLink size={16} />
              <Link href={user.website} className="text-blue-500">
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={16} />
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        {currentUserId && (
          <UserInfoCardInteraction
            userId={user.id}
            currentUserId={currentUserId}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
