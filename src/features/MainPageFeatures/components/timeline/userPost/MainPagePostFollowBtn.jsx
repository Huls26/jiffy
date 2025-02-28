import { GlobalContext } from "@/contexts/GlobalContextProvider";
import isUserFollowing from "../../../utils/timeline/userPost/isUserFollowing";
import followUserAction from "../../../utils/timeline/userPost/followUserAction";
import unFollowingUserAction from "../../../utils/timeline/userPost/unFollowingUserAction";

import { useContext, useState, useEffect } from "react";

export default function MainPagePostFollowBtn({ postData }) {
  const [globalState] = useContext(GlobalContext);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    isUserFollowing(globalState.userId, postData.userId).then((res) => {
      setIsFollowing(res);
    });
  }, [globalState.userId, postData.userId]);

  async function handleFollowUser() {
    try {
      // Check if the current user is following the target user
      const isUserFollowed = await isUserFollowing(globalState.userId, postData.userId);

      if (!isUserFollowed) {
        // Add the user to the following list and increment followers count
        await followUserAction(globalState.userId, postData.userId);
      } else {
        // Remove the user from the following list and decrement followers count
        await unFollowingUserAction(globalState.userId, postData.userId);
      }
    } catch (err) {
      console.error("Error following user:", err);
    }
  }

  if (postData.userId !== globalState.userId) {
    return (
      <button
        type="button"
        className="text-gray-200 font-semibold hover:text-gray-400"
        onClick={handleFollowUser}
      >
        {isFollowing ? "Follow" : "Following"}
      </button>
    );
  }

  return null;
}
