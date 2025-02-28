import { GlobalContext } from "@/contexts/GlobalContextProvider";
import isUserFollowing from "../../../utils/timeline/userPost/isUserFollowing";
import handleFollowUser from "../../../utils/timeline/userPost/handleFollowUser";

import { useContext, useState, useEffect } from "react";

export default function MainPagePostFollowBtn({ postData }) {
  const [globalState] = useContext(GlobalContext);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    isUserFollowing(globalState.userId, postData.userId)
      .then((res) => {
        setIsFollowing(res);
      });
  }, [globalState.userId, postData.userId]);

  if (postData.userId !== globalState.userId) {
    return (
      <button
        type="button"
        className="text-gray-200 font-semibold hover:text-gray-400"
        onClick={
          () => handleFollowUser(
            isFollowing,
            setIsFollowing,
            globalState.userId,
            postData.userId
          )
        }
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    );
  }

  return null;
}
