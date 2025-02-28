import { GlobalContext } from "@/contexts/GlobalContextProvider";
import handleFollowUser from "../../../utils/timeline/userPost/handleFollowUser";
import useFollowerState from "../../../hooks/userPost/useFollowerState";

import { useContext } from "react";
import PropTypes from "prop-types";

export default function MainPagePostFollowBtn({ postData }) {
  const [globalState] = useContext(GlobalContext);
  const [isFollowing, setIsFollowing] = useFollowerState(globalState.userId, postData.userId);

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

MainPagePostFollowBtn.propTypes = {
  postData: PropTypes.shape({
    userId: PropTypes.string.isRequired,
  }).isRequired,
}