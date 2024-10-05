import PropTypes from 'prop-types'

export default function SuggestedUsersCloseBtn({ onClick, isDisplay }) {
  if (isDisplay) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="font-semibold text-red-500 hover:font-bold active:text-red-600"
      >
        close
      </button>
    );
  }

  return null;
}

SuggestedUsersCloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisplay: PropTypes.bool.isRequired,
}