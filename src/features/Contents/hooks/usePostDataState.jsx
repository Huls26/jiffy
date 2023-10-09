import { useContext } from 'react';

import contentDataContext from '../context/contentDataContext';
import shortenLikesValue from '../utils/shortenLikesValue';

export default function usePostDataState() {
  // getting post data
  // handle post state
  const {
    docData, contentId, userState, dispatch, userId,
  } = useContext(contentDataContext);
  const {
    userImg, textContent, username, likes, peopleLikes, title, createdBy,
  } = userState;
  const displayLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

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
