import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HeaderUserProfile({ photoURL }) {
  return (
    <div className="w-5 h-5 md:w-7 md:h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
      <LazyLoadImage
        src={photoURL}
        alt="user profile"
        className="block w-full h-full object-contain rounded-full"
        effect="blur"
      />
    </div>
  );
}

HeaderUserProfile.propTypes = {
  photoURL: PropTypes.string.isRequired,
};
