import { Link } from 'react-router-dom';

import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';

import usePostDataState from '../hooks/usePostDataState';

export default function UserDetails() {
  const {
    dispatch, userImg, title, username,
    displayLikes, btnBg, userId, createdBy, contentId, userState,
  } = usePostDataState();

  // modifyTitle safety net
  const modifyTitle = title.length >= 27 ? title.slice(0, 27) : title;

  return (
    <div className="flex items-start space-x-3">
      <Link
        to={`../profile/${createdBy}`}
        state={{ docData: userState, contentId }}
      >
        <UserImage userImg={userImg} />
      </Link>
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{modifyTitle}</h1>
        <h6 className="font-A text-base font-medium capitalize leading-none mb-2 opacity-90">{username}</h6>
        <div className="space-x-1">
          <ContentBtn
            text={`like (${displayLikes})`}
            bg={btnBg}
            onClick={() => userId && dispatch({ type: 'USER_LIKE', userId, contentId })}
          />
          <Link to="../view" state={{ docData: userState, contentId }}>
            <ContentBtn text="comment" />
          </Link>
        </div>
      </div>
    </div>
  );
}
