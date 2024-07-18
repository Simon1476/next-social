import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import UserStoryList from "./UserStoryList";

const UserStorties = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs ">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <UserStoryList stories={stories} />
      </div>
    </div>
  );
};

export default UserStorties;
