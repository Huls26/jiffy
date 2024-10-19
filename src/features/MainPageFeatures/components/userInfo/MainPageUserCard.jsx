import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import MainPageCreatePostBtn from "../buttons/MainPageCreatePostBtn";
import MainPageCreatePostModal from "../createPostModal/MainPageCreatePostModal";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { useContext, } from "react";

export default function MainPageUserCard() {
  const [globalState] = useContext(GlobalContext);
  const { email, username, photoURL } = globalState;
  const [, dispatch] = useContext(reducerContext)

  function displayPostModal() {
    dispatch({ type: "UPDATE_DISPLAY_POST_MODAL" })
  }

  return (
    <section className="sm:max-w-80 p-1 pl-2 flex cursor-pointer">
      <MainPageUserProfileLink
        to={`profile/${username}`}
        photoURL={photoURL}
        username={username}
        email={email}
      />
      <MainPageCreatePostModal
        userInfo={globalState}
      />
      <MainPageCreatePostBtn onClick={displayPostModal} />
    </section>
  );
}
