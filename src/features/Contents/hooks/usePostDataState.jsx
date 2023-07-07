import { useContext, useReducer } from 'react';
import { dataContext } from '@App';
import { contentDataContext } from '../context';

import shortenLikesValue from '../utils/shortenLikesValue';
import reducerMethod from '../utils/userReducer';

export default function usePostDataState() {
  const [userContext] = useContext(dataContext);
  const { userId } = userContext;
  const { doc, id } = useContext(contentDataContext);
  // const {
  //   userImg, textContent, username, likes, peopleLikes,
  // } = doc;
  const [userState, dispatch] = useReducer(
    reducerMethod, { ...doc, contentId: id },
  );
  const {
    userImg, textContent, username, likes, peopleLikes, // contentId,
  } = userState;
  const displayLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  return {
    dispatch, userImg, textContent, username, displayLikes, btnBg, userId,
  };
}
