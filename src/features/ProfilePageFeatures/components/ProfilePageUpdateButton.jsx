import PropTypes from "prop-types";

export default function ProfilePageUpdateButton({ isDisplay, onClick }) {
  // If the button is not displayed, return null to avoid rendering it
  if (!isDisplay) return null;

  return (
    <button
      type="button"
      className="ml-auto font-semibold text-sky-400 text-lg hover:text-sky-600"
      onClick={onClick}
    >
      Update Profile
    </button>
  )
}

ProfilePageUpdateButton.propTypes = {
  isDisplay: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
