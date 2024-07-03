import Feed from "@/components/Feed";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import Image from "next/image";

const ProfilePage = () => {
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
                src="https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 mx-auto -bottom-16 ring-4 ring-white"
              />
            </div>
          </div>
          <h1 className="mt-20 mb-4 text-2xl font-medium text-center">
            Sophia Carter
          </h1>
          <div className="flex justify-center items-center gap-12 mb-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">123</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">1.5k</span>
              <span className="text-sm">Follwers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">1.1k</span>
              <span className="text-sm">Following</span>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightSideBar userId="test" />
      </div>
    </main>
  );
};

export default ProfilePage;
