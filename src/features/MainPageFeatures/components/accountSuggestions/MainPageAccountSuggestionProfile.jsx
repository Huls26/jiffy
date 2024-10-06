import PropTypes from 'prop-types';
import MainPageUserProfileLink from "../userInfo/MainPageUserProfileLink";

export default function MainPageAccountSuggestionProfile({ user }) {
  return (
    <div key={user.userId} className="flex justify-between items-center m-2 px-2 py-1 border-2 border-gray-400 rounded-xl">
      <MainPageUserProfileLink to={`profile/${user.userId}`} photoURL={user.photoURL} username={user.username} email={user.email} />

      <button type='button' className="font-semibold text-gray-400 hover:text-gray-200 active:text-green-300">follow</button>
    </div>
  )
}

MainPageAccountSuggestionProfile.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
}