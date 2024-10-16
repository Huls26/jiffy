import { GlobalContext } from "@/contexts/GlobalContextProvider";
// import { reducerContext } from "@/contexts/ReducerContextProvider";
// import MainPageUserInfoSkeleton from "../MainPageUserInfoSkeleton";
import MainPageCreatePostBtn from "../buttons/MainPageCreatePostBtn";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { useContext, useState } from "react";

export default function MainPageUserCard() {
  const [globalState] = useContext(GlobalContext);
  const { email, username, photoURL } = globalState;
  const [createPostModal, setCreatePostModal] = useState(null);

  function displayPostModal() {
    setCreatePostModal(prevValue => !prevValue);
  }

  return (
    <section className="sm:max-w-80 p-1 pl-2 flex cursor-pointer">
      <MainPageUserProfileLink
        to={`profile/${username}`}
        photoURL={photoURL}
        username={username}
        email={email}
      />
      <MainPageCreatePostBtn onClick={displayPostModal} />
    </section>
  );
}
