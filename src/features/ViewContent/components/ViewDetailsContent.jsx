import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import useHandleSearchParams from '@hooks/useHandleSearchParams';

import useViewContentHooks from '../hooks/useViewContentHooks';

export default function ViewDetailsContent({ stateLocation }) {
  const {
    dispatch, title, userImg, username, likes, btnBg, userId,
    createdBy, ownPost, followers, btnBgFollow, docData, contentId,
  } = useViewContentHooks(stateLocation);
  const { searchParams, handleSetSearchParams } = useHandleSearchParams();
  const displayComments = searchParams.get('view') === 'comments';
  const commentBtnStyle = displayComments ? 'bg-green' : null;
  const profileLink = `../profile/${createdBy}`;

  // turn on/off comment button
  function handleCommentBtn() {
    // i like this code
    if (displayComments) {
      handleSetSearchParams('view');
    } else {
      handleSetSearchParams('view', 'comments');
    }
  }

  console.log('code clean up');

  return (
    <section className="
        w-full
        px-3 text-dark-2
        mb-4
      "
    >
      <h1 className="font-PS text-xl font-bold capitalize leading-none mb-3 block">{title}</h1>
      <div className="flex items-start justify-between">
        <div className="flex space-x-2">
          <Link to={profileLink} state={{ docData, contentId }}>
            <UserImage userImg={userImg} />
          </Link>
          <div className="flex items-start space-x-3">
            <div className="inline">
              <h6 className="font-A text-lg font-medium capitalize leading-none">{username}</h6>
              <h6 className="text-gray-dark opacity-75">
                {followers || 0}
                {' '}
                followers
              </h6>
            </div>
            {!ownPost && (
            <ContentBtn
              text="follow"
              bg={btnBgFollow}
              onClick={() => dispatch({ type: 'USER_FOLLOW', userId })}
            />
            )}
          </div>
        </div>

        <div className="space-x-1">
          <ContentBtn
            text={`likes (${likes})`}
            bg={btnBg}
            onClick={() => userId && dispatch({ type: 'USER_LIKE', userId })}
          />
          <ContentBtn text="comment" onClick={() => handleCommentBtn()} bg={commentBtnStyle} />
        </div>
      </div>
    </section>
  );
}

ViewDetailsContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stateLocation: PropTypes.object.isRequired,
};
