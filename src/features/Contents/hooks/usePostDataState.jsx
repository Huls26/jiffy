import { useContext, useEffect, useReducer } from 'react';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@api/FB';
import { dataContext } from '@context/dataContext';

import { contentDataContext } from '../context';
import shortenLikesValue from '../utils/shortenLikesValue';
import reducerMethod from '../utils/userReducer';

export default function usePostDataState() {
  // getting user data/User id
  const [userContext] = useContext(dataContext);
  const { userId } = userContext;
  // getting post data
  const { docData, contentId } = useContext(contentDataContext);
  // setting post data to state
  // updating post data
  const [userState, dispatch] = useReducer(reducerMethod, { ...docData });
  const {
    userImg, textContent, username, likes, peopleLikes, title, createdBy,
  } = userState;
  const displayLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  console.log(docData);
  // problem here i think instead of using useEffect
  // direct update the firebase using useReducer dispatch
  useEffect(() => {
    // updating firebase posts data
    async function updateFirebase() {
      if (userId) {
        const contentRef = doc(db, 'posts', contentId);
        await updateDoc(contentRef, {
          likes,
          peopleLikes,
        });
      }
    }
    // debouncing
    const updateData = setTimeout(updateFirebase, 360);

    return () => clearTimeout(updateData);
  }, [peopleLikes, likes, userId, contentId]);

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
