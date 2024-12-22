import { db } from '@/lib/fb';
import usePostInteraction from '../../hooks/usePostInteraction';
import formatRelativeTime from '../../utils/timeline/formatRelativeTime';
import MainPageUserProfileLink from '../userInfo/MainPageUserProfileLink';
import MainPagePostCardBtn from './MainPagePostCardBtn';

import { arrayRemove, arrayUnion, doc, increment, updateDoc } from 'firebase/firestore';
import PropTypes from "prop-types";

export default function MainPagePostCard({ userPost }) {
  const {
    buttonState,
    dispatch,
    currentUserId,
  } = usePostInteraction(userPost);
  const relativeTime = formatRelativeTime(userPost?.dateCreated);

  async function handleLikeButton() {
    dispatch({ type: 'LIKE_POST' });
    const userPostRef = doc(db, "userPosts", userPost.postId);

    await updateDoc(userPostRef, {
      likedUsers: buttonState.likeButton ? arrayRemove(currentUserId) : arrayUnion(currentUserId),
      likes: buttonState.likeButton ? increment(-1) : increment(1),
    })
  }

  return (
    <div
      className='space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950 cursor-pointer'
    >
      <div className='mx-2 m-1 flex justify-between'>
        <MainPageUserProfileLink
          to={`profile/${userPost.username}`}
          photoURL={userPost.photoURL}
          username={userPost.username}
          email={userPost.email}
        />
        <h1 className='font-semibold text-xs text-gray-400 select-none'>{relativeTime} ago</h1>
      </div>
      {/* Display the text content of the user's post */}
      <h1 className='ml-2 sm:text-xl'>{userPost.textContent}</h1>

      {/* Display the image content of the user's post */}
      <img
        className="min-h-[180px] aspect-video object-cover"
        src={userPost.content}
        alt={`users post content: ${userPost.textContent}`}
      />

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
    </div>);
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