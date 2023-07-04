import PropTypes from 'prop-types';
import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';
import shortenLikesValue from '../utils/shortenLikesValue';

export default function UserDetails({
  userImg, textContent, username, likes, peopleLikes,
}) {
  const likesValue = shortenLikesValue(likes);

  return (
    <div className="flex items-start space-x-3">
      <UserImage userImg={userImg} />
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{textContent}</h1>
        <h6 className="font-A text-base capitalize leading-none mb-2">{username}</h6>
        <div className="space-x-1">
          <ContentBtn text={`like (${likesValue})`} bg="bg-aqua-1" />
          <ContentBtn text="comment" />
        </div>
      </div>
      {peopleLikes}
    </div>
  );
}

UserDetails.propTypes = {
  userImg: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  textContent: PropTypes.string,
  likes: PropTypes.number.isRequired,
  peopleLikes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
