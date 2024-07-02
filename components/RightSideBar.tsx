import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import SponsoredAds from "./SponsoredAds";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightSideBar = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}

      <FriendRequests />
      <Birthdays />
      <SponsoredAds size="md" />
    </div>
  );
};

export default RightSideBar;
