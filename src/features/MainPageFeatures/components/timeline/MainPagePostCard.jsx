
import usePostInteraction from '../../hooks/usePostInteraction';
import handleLikeButton from "../../utils/timeline/handleLikeButton";
import MainPagePostCardBtn from './MainPagePostCardBtn';
import MainPageUserPostCard from './MainPageUserPostCard';
import "./style/MainPagePostCard.css";

import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

/**
 * MainPagePostCard component renders a user's post on the main page timeline.
 * It includes the user's profile, post content, and interaction buttons (like and comment).
 *
 * @param {Object} props - The component props.
 * @param {Object} props.userPost - The user post data.
 * @param {string} props.userPost.postId - The unique identifier for the post.
 * @param {string} props.userPost.textContent - The text content of the post.
 * @param {string} props.userPost.content - The image content of the post.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function MainPagePostCard({ userPost }) {
  const {
    buttonState,
    dispatch,
    currentUserId,
  } = usePostInteraction(userPost);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCommentButton() {
    dispatch({ type: 'COMMENT_POST' });
    if (!searchParams.get('comment')) {
      setSearchParams({ comment: userPost.postId });
    } else {
      setSearchParams({});
    }
  }

  console.log("add show more button to comment section");
  console.log("user comment should be displayed in the comment section");
  console.log("create context for comment section to pass data to the comment section");
  console.log("code clean up")
  return (
    <section
      className='space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950 cursor-pointer'
    >
      {/* User profile link and relative time */}
      <MainPageUserPostCard userPost={userPost} />

      {/* button section */}
      {/* Container for the buttons */}
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
          isActive={buttonState.commentButton}
          onClick={handleCommentButton}
          ariaLabel="Toggle comment section for post"
          textContent={"Comment"}
        />
      </div>
    </section>);
}

MainPagePostCard.propTypes = {
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