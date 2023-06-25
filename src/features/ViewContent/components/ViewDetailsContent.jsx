import PropTypes from 'prop-types';

import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';

export default function ViewDetailsContent({ details }) {
  const { userImg, username, textDetails } = details;

  return (
    <section className="
        w-full
        px-3 text-dark-2
        mb-4
      "
    >
      {/* <div className={`${imgUrl} w-10 h-10`} /> */}
      <h1 className="font-PS text-xl font-bold capitalize leading-none mb-3 block">{textDetails}</h1>
      <div className="flex items-start justify-between">
        <div className="flex space-x-2">
          <UserImage userImg={userImg} />
          <div className="flex items-start space-x-3">
            <div className="inline">
              <h6 className="font-A text-lg font-medium capitalize leading-none">{username}</h6>
              <h6 className="text-gray-dark opacity-75">123 followers</h6>
            </div>
            <ContentBtn text="follow" bg="bg-purple" />
          </div>
        </div>

        <div className="space-x-1">
          {/* it the like reacth to 1000 the likes should be 1K */}
          {/* if 0 like text should be 'like' */}
          <ContentBtn text="likes (1K)" bg="bg-aqua-1" />
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
