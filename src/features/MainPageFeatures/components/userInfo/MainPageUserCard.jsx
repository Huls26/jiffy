import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import MainPageUserInfoSkeleton from "../MainPageUserInfoSkeleton";
import MainPageCreatePostBtn from "../buttons/MainPageCreatePostBtn";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { useContext } from "react";

export default function MainPageUserCard() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState] = useContext(reducerContext)
  const { email, username, photoURL } = globalState;

  if (sidebarState.isLoading) {
    return <MainPageUserInfoSkeleton />
  }

  return (
    <section className="sm:max-w-80 p-1 pl-2 flex cursor-pointer">
      <MainPageUserProfileLink to={`profile/${username}`} photoURL={photoURL} username={username} email={email} />
      <MainPageCreatePostBtn />
    </section>
  );
}
