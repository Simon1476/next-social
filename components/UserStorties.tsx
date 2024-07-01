import Image from "next/image";

const UserStorties = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs ">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">random Name</span>
        </div>
      </div>
    </div>
  );
};

export default UserStorties;
