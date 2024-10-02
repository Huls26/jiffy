import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import MainPageUserInfoSkeleton from "./MainPageUserInfoSkeleton";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
      <NavLink to="creatpost" className="ml-auto">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:text-gray-600 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:opacity-70 font-bold rounded-lg text-sm px-2.5 py-0.5 text-center me-2"
        >
          Post
        </button>
      </NavLink>
    </section>
  );
}
