import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import { dataContext } from '@context/dataContext';
import { useContext } from 'react';
import shortenLikesValue from '../../Contents/utils/shortenLikesValue';

export default function ViewDetailsContent() {
  const [userData] = useContext(dataContext);
  const { userId } = userData;
  const { state } = useLocation();
  const {
    title, userImg, username, followers, likes, peopleLikes,
  } = state.docData;

  const shortenLikes = shortenLikesValue(likes);
  const isUserLike = peopleLikes.includes(userId);
  const btnBg = isUserLike ? 'bg-green' : 'bg-aqua-1';

  console.log(btnBg);

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
          <ContentBtn text={`likes (${shortenLikes})`} bg="bg-aqua-1" />
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
