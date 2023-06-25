import PropTypes from 'prop-types';

import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';

export default function DetailsContent({ details }) {
  const { userImg, username, textDetails } = details;

  return (
    <section className="
        flex justify-between items-start
        w-full
        px-3 text-dark-2
      "
    >
      {/* <div className={`${imgUrl} w-10 h-10`} /> */}
      <div className="flex items-start space-x-3">
        <UserImage userImg={userImg} />
        <div>
          <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{textDetails}</h1>
          <h6 className="font-A text-base capitalize leading-none mb-2">{username}</h6>
          <div className="space-x-1">
            <ContentBtn text="like" bg="bg-aqua-1" />
            <ContentBtn text="comment" />
          </div>
        </div>
      </div>

      <ContentBtn text="Update/Delete" />
    </section>
  );
}

DetailsContent.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
