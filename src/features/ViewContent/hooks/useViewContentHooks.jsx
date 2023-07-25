import { useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@api/FB';
import { dataContext } from '@context/dataContext';
import reducerMethod from '@features/Contents/utils/userReducer';
import shortenLikesValue from '@features/Contents/utils/shortenLikesValue';

export default function useViewContentHooks() {
  // get dataContext
  const [userData] = useContext(dataContext);
  const { userId } = userData;
  // get the link state
  const { state } = useLocation();
  const { docData, contentId } = state;
  // store the docData
  // update like button
  const [userState, dispatch] = useReducer(reducerMethod, { ...docData });
  const {
    title, userImg, username, followers, likes, peopleLikes,
  } = userState;

  // modify likes value
  const shortenLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  // set button bg
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';
  // modify title -safety net
  const modifyTitle = title.length >= 27 ? title.slice(0, 27) : title;

  const contentRef = doc(db, 'posts', contentId);

  // update firebase when user like the post
  useEffect(() => {
    // updating firebase posts data
    async function updateFirebase() {
      if (userId) {
        await updateDoc(contentRef, {
          likes,
          peopleLikes,
        });
      }
    }
    // debouncing
    const updateData = setTimeout(updateFirebase, 2000);

    return () => clearTimeout(updateData);
  }, [peopleLikes, likes, contentRef, userId]);

  return (
    {
      dispatch,
      title: modifyTitle,
      userImg,
      username,
      followers,
      likes: shortenLikes,
      btnBg,
      userId,
    }
  );
}
