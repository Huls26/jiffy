import { GlobalContext } from "@/contexts/GlobalContextProvider";
import MainPageCreatePostBtn from "../buttons/MainPageCreatePostBtn";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { lazy, useContext } from "react";

const MainPageCreatePortalModal = lazy(() => import('../createPostModal/MainPageCreatePortalModal'));

export default function MainPageUserCard() {
  const [globalState] = useContext(GlobalContext);
  const { email, username, photoURL } = globalState;

  return (
    <section className="md:max-w-md p-1 pl-2 flex items-center cursor-pointer">
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