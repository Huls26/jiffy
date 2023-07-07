// import { useContext, useReducer } from 'react';

import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';
// import { dataContext } from '@App';
// import { contentDataContext } from '../context';
// import shortenLikesValue from '../utils/shortenLikesValue';
// import reducerMethod from '../utils/userReducer';
import usePostDataState from '../hooks/usePostDataState';

export default function UserDetails() {
  // const [userContext] = useContext(dataContext);
  // const { doc, id } = useContext(contentDataContext);
  // // const {
  // //   userImg, textContent, username, likes, peopleLikes,
  // // } = doc;
  // const [userState, dispatch] = useReducer(
  //   reducerMethod, { ...doc, contentId: id },
  // );
  // const {
  //   userImg, textContent, username, likes, peopleLikes, // contentId,
  // } = userState;
  // const likesValue = shortenLikesValue(likes);
  // const isUserLike = peopleLikes.includes(userContext.userId);
  // const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';
  const {
    dispatch, userImg, textContent, username, displayLikes, btnBg, userId,
  } = usePostDataState();

  return (
    <div className="flex items-start space-x-3">
      <UserImage userImg={userImg} />
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{textContent}</h1>
        <h6 className="font-A text-base capitalize leading-none mb-2">{username}</h6>
        <div className="space-x-1">
          <ContentBtn
            text={`like (${displayLikes})`}
            bg={btnBg}
            onClick={() => dispatch({ type: 'USER_LIKE', userId })}
          />
          <ContentBtn text="comment" />
        </div>
      </div>
    </div>
  );
}
