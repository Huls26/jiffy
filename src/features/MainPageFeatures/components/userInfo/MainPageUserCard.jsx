import { GlobalContext } from "@/contexts/GlobalContextProvider";
import MainPageCreatePostBtn from "../buttons/MainPageCreatePostBtn";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { lazy, useContext } from "react";

const MainPageCreatePortalModal = lazy(() => import('../createPostModal/MainPageCreatePortalModal'));

export default function MainPageUserCard() {
  const [globalState] = useContext(GlobalContext);
  const { email, username, photoURL } = globalState;

  return (
    <section className="sm:max-w-80 p-1 pl-2 flex cursor-pointer">
      <MainPageUserProfileLink
        to={`profile/${username}`}
        photoURL={photoURL}
        username={username}
        email={email}
      />
      <MainPageCreatePortalModal />
      <MainPageCreatePostBtn />
    </section >
  );
}

MainPageUserCard.whyDidYouRender = true;