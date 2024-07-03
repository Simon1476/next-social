import Feed from "@/components/Feed";
import LeftSideBar from "@/components/LeftSideBar";
import PostComposer from "@/components/PostComposer";
import RightSideBar from "@/components/RightSideBar";
import UserStorties from "@/components/UserStorties";

export default function Home() {
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftSideBar type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <UserStorties />
          <PostComposer />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightSideBar />
      </div>
    </main>
  );
}
