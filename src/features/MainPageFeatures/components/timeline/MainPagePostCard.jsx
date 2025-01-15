import UserProfile from "@/components/UserProfile";
import { auth } from '@/lib/fb';
import usePostInteraction from '../../hooks/usePostInteraction';
import handleLikeButton from "../../utils/timeline/handleLikeButton";
import MainPagePostCardBtn from './MainPagePostCardBtn';
import MainPageUserPostCard from './MainPageUserPostCard';

import PropTypes from "prop-types";

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
  const authUserPhoto = auth.currentUser?.photoURL;
  const {
    buttonState,
    dispatch,
    currentUserId,
  } = usePostInteraction(userPost);

  return (
    <section
      className='relative space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950 cursor-pointer'
    >
      {/* User profile link and relative time */}
      <MainPageUserPostCard userPost={userPost} />

      {/* Container for the buttons */}
      <div className='p-2 text-sm sm:text-base flex justify-between select-none'>

        {/* Like button */}
        <MainPagePostCardBtn
          isActive={buttonState.likeButton}
          onClick={() => handleLikeButton(dispatch, userPost, buttonState, currentUserId)}
          ariaLabel="like button"
          likesCount={buttonState.likesCount}
          textContent={"Like"}
        />

        {/* Comment button */}
        <MainPagePostCardBtn
          isActive={buttonState.commentButton}
          onClick={() => dispatch({ type: 'COMMENT_POST' })}
          ariaLabel="comment button"
          textContent={"Comment"}
        />
      </div>

      {/* comment section */}
      <section className='p-2 fixed top-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-11/12 bg-slate-950 rounded-lg z-50 text-gray-300'>
        <h1 className="mb-2 text-gray-200 text-lg font-semibold">Comments [number of comments]</h1>
        {/* current user Comment input */}
        <label htmlFor="timeline-comment-input" className='mb-6 grid grid-cols-12 gap-2'>
          <UserProfile photoURL={authUserPhoto} addedClassName={'w-8 h-8 hover:scale-110'} />
          <input
            name='timeline-comment-input'
            type="text"
            placeholder="Write a comment..."
            className="col-start-2 col-end-13 row-end-auto w-full px-3 py-1 font-medium text-gray-950 text-sm sm:text-base rounded-full border-gray-950 focus:outline-none focus:ring-2 focus:ring-slate-600"
            id='timeline-comment-input'
          />
        </label>

        {/* Comment */}
        <div className="flex items-center space-x-2">
          {console.log("change photoURL to the user's who is commenting")}
          <UserProfile photoURL={authUserPhoto} addedClassName={'w-10 h-10 hover:scale-110 shrink-0'} />
          <div>
            <h1 className="font-semibold text-sky-400">Username || email {<span className="text-gray-300 text-xs">date created</span>}</h1>
            <p className="text-sm font-mono leading-4">The harmonic notes are flying and I'm happy with it.</p>
          </div>
        </div>
      </section>
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