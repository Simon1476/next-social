import Feed from "@/components/feed/Feed";
import LeftSideBar from "@/components/leftSidebar/LeftSideBar";
import RightSideBar from "@/components/rightSidebar/RightSideBar";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftSideBar type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noCover.jpg"}
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 mx-auto -bottom-16 ring-4 ring-white"
              />
            </div>
          </div>
          <h1 className="mt-20 mb-4 text-2xl font-medium text-center">
            {user.name && user.surname
              ? user.username + " " + user.surname
              : user.username}
          </h1>
          <div className="flex justify-center items-center gap-12 mb-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.posts}</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.followers}</span>
              <span className="text-sm">Follwers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.followings}</span>
              <span className="text-sm">Followings</span>
            </div>
          </div>
          <Feed username={user.username} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightSideBar user={user} />
      </div>
    </main>
  );
};

export default ProfilePage;
