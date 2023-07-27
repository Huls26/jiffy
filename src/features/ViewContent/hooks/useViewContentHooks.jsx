import { useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@api/FB';
import { dataContext } from '@context/dataContext';
import reducerMethod from '@features/Contents/utils/userReducer';
import shortenLikesValue from '@features/Contents/utils/shortenLikesValue';

// code clean up
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
    title, userImg, username, followers,
    peopleFollows, likes, peopleLikes, createdBy,
  } = userState;

  // modify likes value
  const shortenLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  // set button bg
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  // modify followers value
  const shortenFollowers = shortenLikesValue(followers);
  const isUserFollow = peopleFollows?.includes(userId);
  // set button bg when user follow
  const btnBgFollow = isUserFollow ? 'bg-green' : 'bg-purple';

  // modify title -safety net
  const modifyTitle = title.length >= 27 ? title.slice(0, 27) : title;

  const contentRef = doc(db, 'posts', contentId);
  // check own post
  const ownPost = userId === createdBy;

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
    const updateData = setTimeout(updateFirebase, 360);

    return () => clearTimeout(updateData);
  }, [peopleLikes, likes, contentRef, userId]);

  // update firebase user follow when user follow
  useEffect(() => {
    // updating firebase user data
    const userDocRef = doc(db, 'users', createdBy);
    const postDocRef = doc(db, 'posts', contentId);
    async function updateUserFollowers() {
      if (userId) {
        await updateDoc(userDocRef, {
          followers,
          peopleFollows,
        });
        await updateDoc(postDocRef, {
          followers,
          peopleFollows,
        });
      }
    }
    // debouncing
    const updateData = setTimeout(updateUserFollowers, 360);

    return () => clearTimeout(updateData);
  }, [followers, peopleFollows, createdBy, userId, contentId]);

  return (
    {
      dispatch,
      title: modifyTitle,
      userImg,
      username,
      followers: shortenFollowers,
      peopleFollows,
      likes: shortenLikes,
      btnBg,
      userId,
      createdBy,
      ownPost,
      contentId,
      btnBgFollow,
    }
  );
}
