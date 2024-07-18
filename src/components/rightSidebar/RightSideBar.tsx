import { User } from "@prisma/client";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import SponsoredAds from "../SponsoredAds";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { Suspense } from "react";

const RightSideBar = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}

      <FriendRequests />
      <Birthdays />
      <SponsoredAds size="md" />
    </div>
  );
};

export default RightSideBar;
