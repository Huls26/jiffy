import PropTypes from "prop-types";
import { memo } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

function UserProfile({ photoURL, addedClassName }) {
  const style = `${addedClassName} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer`

  return (
    <div className={style}>
      {
        photoURL
        && <LazyLoadImage
          src={photoURL}
          alt="user profile"
          className="block w-full h-full object-contain rounded-full transition"
          effect="blur"
        />
      }
    </div>
  );
}

const MemoUserProfile = memo(UserProfile);
export default MemoUserProfile;

UserProfile.propTypes = {
  photoURL: PropTypes.string.isRequired,
  addedClassName: PropTypes.string.isRequired,
};
