"use client";

import { addStory } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & {
  user: User;
};

const UserStoryList = ({ stories }: { stories: StoryWithUser[] }) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>();

  const { user, isLoaded } = useUser();

  // const [optimisticStories, addOptimisticStory] = useOptimistic(
  //   storyList,
  //   (state, value: StoryWithUser) => [value, ...state]
  // );

  const addStoryAction = async () => {
    if (!img?.secure_url) return;

    // addOptimisticStory({
    //   id: Math.random().toString(),
    //   img: img.secure_url,
    //   createdAt: new Date(Date.now()),
    //   expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    //   userId: userId,
    //   user: {
    //     id: userId,
    //     username: "Sending Plz...",
    //     avatar: user?.imageUrl || "/noAvatar.png",
    //     cover: "",
    //     name: "",
    //     surname: "",
    //     description: "",
    //     city: "",
    //     school: "",
    //     work: "",
    //     website: "",
    //     createdAt: new Date(Date.now()),
    //   },
    // });

    try {
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory, ...prev]);
      setImg(null);
    } catch (error) {}
  };
  return (
    <>
      <CldUploadWidget
        uploadPreset="social"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="relative flex flex-col items-center gap-2 cursor-pointer">
              <Image
                src={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
                alt={`${user?.fullName}'s profile picture`}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2 object-cover"
                onClick={() => open()}
              />

              {img ? (
                <form action={addStoryAction}>
                  <button className="p-1 rounded-md text-xs bg-blue-500 text-white">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a Story</span>
              )}
              <div className="absolute text-6xl text-gray-200 top-1">+</div>
            </div>
          );
        }}
      </CldUploadWidget>
      {storyList.map((story) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={story.id}
        >
          <Image
            src={story.user.avatar || "/noAvatar.png"}
            alt={`${story.user.username}'s profile picture`}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <Link href={`/stories/${story.id}`}>이미지 확인하기</Link>
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
};

export default UserStoryList;
