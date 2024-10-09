import { GlobalContext } from '@/contexts/GlobalContextProvider';
import followUser from '../../utils/accountSuggestion/followUser';
import MainPageUserProfileLink from "../userInfo/MainPageUserProfileLink";

import PropTypes from 'prop-types';
import { useContext } from 'react';

export default function MainPageAccountSuggestionProfile({ user }) {
  const [globalState] = useContext(GlobalContext)
  const { userId } = globalState;

  return (
    <div key={user.userId}
      className="flex justify-between items-center m-2 px-2 py-1 border-2 border-gray-400 rounded-xl"
    >
      <MainPageUserProfileLink
        to={`profile/${user.userId}`}
        photoURL={user.photoURL}
        username={user.username}
        email={user.email}
      />

      <button
        type='button'
        className="font-semibold text-gray-400 hover:text-gray-200 active:text-green-300 focus:text-green-300"
        onClick={() => followUser(userId, user)}
      >
        follow
      </button>
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