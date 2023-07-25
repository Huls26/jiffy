import { useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';

import { db } from '@api/FB';
import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import { dataContext } from '@context/dataContext';
import reducerMethod from '@features/Contents/utils/userReducer';

import shortenLikesValue from '@features/Contents/utils/shortenLikesValue';
// import usePostDataState from '../../Contents/hooks/usePostDataState';

export default function ViewDetailsContent() {
  // const somethingData = usePostDataState();
  //  console.log(somethingData);
  const [userData] = useContext(dataContext);
  const { userId } = userData;
  const { state } = useLocation();
  const { docData, contentId } = state;
  const [userState, dispatch] = useReducer(reducerMethod, { ...docData });
  const {
    title, userImg, username, followers, likes, peopleLikes,
  } = userState;

  const shortenLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  const contentRef = doc(db, 'posts', contentId);

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
    <section className="
        w-full
        px-3 text-dark-2
        mb-4
      "
    >
      {/* <div className={`${imgUrl} w-10 h-10`} /> */}
      <h1 className="font-PS text-xl font-bold capitalize leading-none mb-3 block">{title}</h1>
      <div className="flex items-start justify-between">
        <div className="flex space-x-2">
          <UserImage userImg={userImg} />
          <div className="flex items-start space-x-3">
            <div className="inline">
              <h6 className="font-A text-lg font-medium capitalize leading-none">{username}</h6>
              <h6 className="text-gray-dark opacity-75">
                {followers || 0}
                {' '}
                followers
              </h6>
            </div>
            <ContentBtn text="follow" bg="bg-purple" />
          </div>
        </div>

        <div className="space-x-1">
          <ContentBtn
            text={`likes (${shortenLikes})`}
            bg={btnBg}
            onClick={() => userId && dispatch({ type: 'USER_LIKE', userId })}
          />
          <ContentBtn text="comment" />
        </div>
      </div>

      {/* <ContentBtn text="Update/Delete" /> */}
    </section>
  );
}

ViewDetailsContent.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
