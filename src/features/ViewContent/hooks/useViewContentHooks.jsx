import { useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

import { dataContext } from '@context/dataContext';
import reducerMethod from '@features/Contents/utils/userReducer';
import modifyValueSetBg from '../utils/modifyValuesSetBg';
import { updatePostLikeFirebase, updateUserFollowers } from '../utils/updateFirebase';

// code clean up
export default function useViewContentHooks(linkState) {
  // get dataContext
  const [userData] = useContext(dataContext);
  const { userId } = userData;
  // get the link state
  const { state } = useLocation();
  const { docData, contentId } = state || linkState;

  // store the docData
  // update like button
  const [userState, dispatch] = useReducer(reducerMethod, { ...docData });
  const {
    title, userImg, username, followers,
    peopleFollows, likes, peopleLikes, createdBy,
  } = userState;

  // modify likes value
  // modify followers value
  // // set button bg
  const [shortenLikes, btnBg] = modifyValueSetBg(likes, peopleLikes, userId, 'bg-aqua-1');
  const [shortenFollowers, btnBgFollow] = modifyValueSetBg(followers, peopleFollows, userId, 'bg-purple');

  // modify title -safety net
  const modifyTitle = title.length >= 27 ? title.slice(0, 27) : title;

  // check own post
  const ownPost = userId === createdBy;

  // update firebase when user like the post
  useEffect(() => {
    // debouncing
    const updateData = setTimeout(() => updatePostLikeFirebase(
      contentId,
      userId,
      likes,
      peopleLikes,
    ), 360);

    return () => clearTimeout(updateData);
  }, [peopleLikes, likes, contentId, userId]);

  // update firebase user follow when user follow
  useEffect(() => {
    // debouncing
    const updateData = setTimeout(() => updateUserFollowers(
      createdBy,
      contentId,
      userId,
      followers,
      peopleFollows,
    ), 360);

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
      docData,
    }
  );
}
