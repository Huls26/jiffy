import UserProfile from "@/components/UserProfile";
import { auth, db } from '@/lib/fb';
import usePostInteraction from '../../hooks/usePostInteraction';
import MainPagePostCardBtn from './MainPagePostCardBtn';
import MainPageUserPostCard from './MainPageUserPostCard';

import { arrayRemove, arrayUnion, doc, increment, updateDoc } from 'firebase/firestore';
import PropTypes from "prop-types";

export default function MainPagePostCard({ userPost }) {
  const authUserPhoto = auth.currentUser?.photoURL;
  const {
    buttonState,
    dispatch,
    currentUserId,
  } = usePostInteraction(userPost);

  async function handleLikeButton() {
    dispatch({ type: 'LIKE_POST' });
    const userPostRef = doc(db, "userPosts", userPost.postId);

    try {
      await updateDoc(userPostRef, {
        likedUsers: buttonState.likeButton
          ? arrayRemove(currentUserId)
          : arrayUnion(currentUserId),
        likes: buttonState.likeButton ? increment(-1) : increment(1),
      });
    } catch (error) {
      console.error("Error updating like status:", error);
      // Optional: Dispatch an error state or revert the state
    }
  }

  return (
    <section
      className='space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950 cursor-pointer'
    >
      {/* User profile link and relative time */}
      <MainPageUserPostCard userPost={userPost} />

      {/* Container for the buttons */}
      <div className='p-2 text-sm sm:text-base flex justify-between select-none'>

        {/* Like button */}
        <MainPagePostCardBtn
          isActive={buttonState.likeButton}
          onClick={handleLikeButton}
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
      <section className='p-2'>
        {/* current user Comment input */}
        <label htmlFor="timeline-comment-input" className='grid grid-cols-12 gap-2'>
          <UserProfile photoURL={authUserPhoto} addedClassName={'w-8 h-8 hover:scale-110'} />
          <input
            name='timeline-comment-input'
            type="text"
            placeholder="Write a comment..."
            className="col-start-2 col-end-13 row-end-auto w-full px-3 py-1 font-medium text-gray-950 text-sm sm:text-base rounded-full border-gray-950 focus:outline-none focus:ring-2 focus:ring-slate-600"
            id='timeline-comment-input'
          />
        </label>
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

MainPagePostCard.whyDidYouRender = true;