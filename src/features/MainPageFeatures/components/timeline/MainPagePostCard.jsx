import { db } from '@/lib/fb';
import usePostInteraction from '../../hooks/usePostInteraction';
import buttonStyle from '../../utils/timeline/buttonStyle';
import formatRelativeTime from '../../utils/timeline/formatRelativeTime';
import MainPageUserProfileLink from '../userInfo/MainPageUserProfileLink';

import { arrayRemove, arrayUnion, doc, increment, updateDoc } from 'firebase/firestore';
import PropTypes from "prop-types";

export default function MainPagePostCard({ userPost }) {
  const {
    buttonState,
    dispatch,
    currentUserId,
  } = usePostInteraction(userPost);
  const relativeTime = formatRelativeTime(userPost?.dateCreated);
  const likeBtnStyle = buttonStyle(buttonState.likeButton);
  const commentBtnStyle = buttonStyle(buttonState.commentButton);

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
      className='space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950'
    >
      <div className='mx-2 m-1 flex justify-between'>
        <MainPageUserProfileLink
          to={`profile/${userPost.username}`}
          photoURL={userPost.photoURL}
          username={userPost.username}
          email={userPost.email}
        />
        <h1 className='font-semibold text-xs text-gray-400'>{relativeTime} ago</h1>
      </div>
      <h1 className='ml-2 sm:text-xl'>{userPost.textContent}</h1>
      <img
        className="min-h-[180px] aspect-video object-cover"
        src={userPost.content}
        alt={`users post content: ${userPost.textContent}`}
      />
      <div className='p-2 text-sm sm:text-base flex justify-between'>
        <button
          type='button'
          className={likeBtnStyle}
          onClick={handleLikeButton}
          aria-label="Show All Posts"
        >
          {buttonState.likesCount} Like
        </button>
        <button
          type='button'
          className={commentBtnStyle}
          onClick={() => dispatch({ type: 'COMMENT_POST' })}
          aria-label="Show Liked Posts"
        >
          Comment
        </button>
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