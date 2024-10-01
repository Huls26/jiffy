import { GlobalContext } from "@/contexts/GlobalContextProvider";
import MainPageUserInfoSkeleton from "./MainPageUserInfoSkeleton";

import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
    // to decided add margin-auto or not...
    // add link to='profile/:username
    <section className="sm:max-w-80 p-1 pl-2 flex cursor-pointer">
      <Link to={`profile/${username}`} className="grid place-self-center mr-2">
        <LazyLoadImage
          src={photoURL}
          alt="user profile"
          className="w-8 rounded-full hover:scale-110 transition"
          effect="blur"
        />
      </Link>
      <Link to={`profile/${username}`} className="text-left -space-y-1">
        <h2 className="text-sky-400 font-semibold hover:font-bold">
          {username}
        </h2>
        <p className="font-mono text-xs text-gray-300 hover:text-gray-400">
          {email}
        </p>
      </Link>
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
