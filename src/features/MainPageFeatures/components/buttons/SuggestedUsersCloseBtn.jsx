import PropTypes from 'prop-types'

export default function SuggestedUsersCloseBtn({ dispatch, isDisplay }) {
  function SuggestedUsersClose() {
    dispatch({
      type: "UPDATE_LIST",
      suggestedUsersList: null,
    });
  }

  if (isDisplay) {
    return (
      <button
        type="button"
        onClick={SuggestedUsersClose}
        className="font-semibold text-red-500 hover:font-bold active:text-red-600"
      >
        close
      </button>
    );
  }

  return null;
}

SuggestedUsersCloseBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isDisplay: PropTypes.bool.isRequired,
};