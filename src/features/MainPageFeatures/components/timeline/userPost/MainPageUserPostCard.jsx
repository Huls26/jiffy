import formatRelativeTime from '../../../utils/formatRelativeTime';
import MainPageUserProfileLink from '../../userInfo/MainPageUserProfileLink';

import PropTypes from "prop-types";

export default function MainPageUserPostCard({ userPost }) {
  const relativeTime = formatRelativeTime(userPost?.dateCreated);
  console.log(userPost);

  return (
    <>
      <div className='mx-2 m-1 flex justify-between'>
        <MainPageUserProfileLink
          to={`profile/${userPost.username}`}
          photoURL={userPost.photoURL}
          username={userPost.username}
          email={userPost.email}
        />
        <div>
          <button
            type='button'
            className='text-gray-200 font-semibold hover:text-gray-400'
          >
            Follow
          </button>
          <h1 className='font-semibold text-xs text-gray-400 select-none'>{relativeTime} ago</h1>
        </div>

      </div >
      <h1 className='ml-2 sm:text-xl'>{userPost.textContent}</h1>
      <img
        className="min-h-[180px] aspect-video object-cover"
        src={userPost.content}
        alt={`users post content: ${userPost.textContent}`}
      />
    </>
  )
}

MainPageUserPostCard.propTypes = {
  userPost: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    dateCreated: PropTypes.any.isRequired,
    textContent: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
}