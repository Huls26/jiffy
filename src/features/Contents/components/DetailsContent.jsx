import PropTypes from 'prop-types';

import ContentBtn from '@components/ContentBtn';
// import UserImage from '@components/UserImage';
import UserDetails from './UserDetails';

export default function DetailsContent({ details }) {
  const { userImg, username, textContent } = details;

  return (
    <section className="
        flex justify-between items-start
        w-full
        px-3 text-dark-2
      "
    >
      <UserDetails
        userImg={userImg}
        username={username}
        textContent={textContent}
      />

      <ContentBtn text="Update/Delete" />
    </section>
  );
}

DetailsContent.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textContent: PropTypes.string,
  }).isRequired,
};
