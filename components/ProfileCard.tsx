import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile Image"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile Image"
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 -bottom-6 ring-1 ring-white z-10 mx-auto"
        />
      </div>
      <div className="flex flex-col gap-2 items-center h-20">
        <span className="font-semibold">Oliver Johnson</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3 object-cover rounded-full"
            />
            <Image
              src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3 object-cover rounded-full"
            />
            <Image
              src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3 object-cover rounded-full"
            />
          </div>
          <span className="text-xs text-gray-500">777 Followers</span>
        </div>
        <button className="rounded-md p-2 text-white bg-blue-500">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
