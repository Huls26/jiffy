import { useContext, useReducer } from 'react';

import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';
import { dataContext } from '@App';
import { contentDataContext } from '../context';
import shortenLikesValue from '../utils/shortenLikesValue';
import reducerMethod from '../utils/userReducer';

export default function UserDetails() {
  const [userContext] = useContext(dataContext);
  const { doc } = useContext(contentDataContext);
  // const {
  //   userImg, textContent, username, likes, peopleLikes,
  // } = doc;
  const [userState, dispatch] = useReducer(reducerMethod, { ...doc });
  const {
    userImg, textContent, username, likes, peopleLikes,
  } = userState;
  const likesValue = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userContext.userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  console.log(userState);
  return (
    <div className="flex items-start space-x-3">
      <UserImage userImg={userImg} />
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{textContent}</h1>
        <h6 className="font-A text-base capitalize leading-none mb-2">{username}</h6>
        <div className="space-x-1">
          <ContentBtn
            text={`like (${likesValue})`}
            bg={btnBg}
            onClick={() => dispatch({ type: 'USER_LIKE', userId: userContext.userId })}
          />
          <ContentBtn text="comment" />
        </div>
      </div>
    </div>
  );
}
