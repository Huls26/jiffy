import { useContext } from 'react';
import { dataContext } from '@context/dataContext';

import { contentDataContext } from '../context';
import shortenLikesValue from '../utils/shortenLikesValue';

export default function usePostDataState() {
  // getting user data/User id
  const [userContext] = useContext(dataContext);
  const { userId } = userContext;
  // getting post data
  // handle post state
  const {
    docData, contentId, userState, dispatch,
  } = useContext(contentDataContext);
  const {
    userImg, textContent, username, likes, peopleLikes, title, createdBy,
  } = userState;
  const displayLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  console.log(contentId, userContext);
  return {
    userState,
    dispatch,
    userImg,
    textContent,
    username,
    displayLikes,
    btnBg,
    userId,
    contentId,
    title,
    createdBy,
    docData,
  };
}
