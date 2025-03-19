import PropTypes from "prop-types";
import { memo } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

function UserProfile({ photoURL, addedClassName }) {
  const style = `${addedClassName} overflow-hidden object-fit bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer transition`

  if (!photoURL) {
    return null; // Return early if no photo URL is provided. This prevents unnecessary re-renders.
  }

  return (
    <LazyLoadImage
      src={photoURL}
      alt="user profile"
      className={style}
      effect="blur"
    />
  );
}

const MemoUserProfile = memo(UserProfile);
export default MemoUserProfile;

UserProfile.propTypes = {
  photoURL: PropTypes.string.isRequired,
  addedClassName: PropTypes.string.isRequired,
};
