import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import MainPageCreatePostBtn from "./MainPageCreatePostBtn";
import MainPageUserInfoSkeleton from "./MainPageUserInfoSkeleton";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { useContext } from "react";
import { Link } from "react-router-dom";

export default function MainPageUserInfo() {
  const [globalState] = useContext(GlobalContext);
  const { email, username, photoURL, isLoading } = globalState;

  console.log('compose component: MainPageUserProfile, MainPageUsernamEmail')
  if (isLoading) {
    return <MainPageUserInfoSkeleton />
  }

  return (
    <section className="sm:max-w-80 p-1 pl-2 flex cursor-pointer">
      <Link to={`profile/${username}`} className="grid place-self-center ">
        <UserProfile photoURL={photoURL} addedClassName={'w-8 h-8 mr-2'} />
      </Link>
      <MainPageUserProfileLink username={username} email={email} />
      <MainPageCreatePostBtn />
    </section>
  );
}
