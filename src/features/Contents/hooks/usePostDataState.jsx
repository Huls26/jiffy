import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@api/FB';

import { useContext, useEffect, useReducer } from 'react';
import { dataContext } from '@App';
import { contentDataContext } from '../context';

import shortenLikesValue from '../utils/shortenLikesValue';
import reducerMethod from '../utils/userReducer';

export default function usePostDataState() {
  const [userContext] = useContext(dataContext);
  const { userId } = userContext;
  const { docData, contentId } = useContext(contentDataContext);
  const [userState, dispatch] = useReducer(
    reducerMethod, { ...docData },
  );
  const {
    userImg, textContent, username, likes, peopleLikes, // contentId,
  } = userState;
  const displayLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';
  const contentRef = doc(db, 'posts', contentId);

  useEffect(() => {
    (async function updateFirebase() {
      await updateDoc(contentRef, {
        likes,
        peopleLikes,
      });
    }());
  }, [peopleLikes, likes, contentRef]);

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
  };
}
