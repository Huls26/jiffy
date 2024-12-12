import formatRelativeTime from '../../utils/timeline/formatRelativeTime';
import MainPageUserProfileLink from '../userInfo/MainPageUserProfileLink';

import PropTypes from "prop-types";

export default function MainPagePostCard({ userPost }) {
  const relativeTime = formatRelativeTime(userPost?.dateCreated);

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
          className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500  text-gray-200 font-bold py-1 px-3 rounded-l"
          aria-label="Show All Posts"
        >
          Like
        </button>
        <button
          type='button'
          className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3 rounded-r"
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