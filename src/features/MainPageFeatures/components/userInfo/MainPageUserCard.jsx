import { GlobalContext } from "@/contexts/GlobalContextProvider";
import MainPageCreatePostBtn from "../buttons/MainPageCreatePostBtn";
import MainPageCreatePostModal from "../createPostModal/MainPageCreatePostModal";
import MainPageUserProfileLink from "./MainPageUserProfileLink";

import { useContext, useState } from "react";

export default function MainPageUserCard() {
  const [globalState] = useContext(GlobalContext);
  const { email, username, photoURL } = globalState;
  const [createPostModal, setCreatePostModal] = useState(false);

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
      <MainPageCreatePostModal
        displayModal={createPostModal}
        userInfo={globalState}
        closeModalEvent={displayPostModal}
      />
      <MainPageCreatePostBtn onClick={displayPostModal} />
    </section>
  );
}
