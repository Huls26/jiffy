import MainPagePostCardBtn from "./MainPagePostCardBtn"
import usePostInteraction from '../../../hooks/usePostInteraction';
import handleLikeButton from "../../../utils/timeline/handleLikeButton";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import useActionLikeComment from '../../../hooks/userPost/useActionLikeComment';

import PropTypes from "prop-types";
import { useContext } from "react";

export default function MainPagePostCardBtnSection({ userPost }) {
  const [globalState] = useContext(GlobalContext);
  const {
    buttonState,
    dispatch,
    currentUserId,
  } = usePostInteraction(userPost);
  const { searchParams, handleCommentButton } = useActionLikeComment(userPost)

  if (!globalState.userId) return null;

  return (
    <div className='p-2 text-sm sm:text-base flex justify-between select-none'>

      {/* Like button */}
      <MainPagePostCardBtn
        isActive={buttonState.likeButton}
        onClick={() => handleLikeButton(dispatch, userPost, buttonState, currentUserId)}
        ariaLabel="Like post"
        likesCount={buttonState.likesCount}
        textContent={"Like"}
      />

      {/* Comment button */}
      <MainPagePostCardBtn
        isActive={searchParams.get('comment') === userPost.postId}
        onClick={handleCommentButton}
        ariaLabel="Toggle comment section for post"
        textContent={"Comment"}
      />
    </div>
  )
}

MainPagePostCardBtnSection.propTypes = {
  userPost: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    dateCreated: PropTypes.any.isRequired,
    textContent: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};