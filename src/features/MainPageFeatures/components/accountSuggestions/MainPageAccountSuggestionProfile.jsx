import { GlobalContext } from '@/contexts/GlobalContextProvider';
import followUser from '../../utils/accountSuggestion/followUser';
import MainPageUserProfileLink from "../userInfo/MainPageUserProfileLink";

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useState } from 'react';

export default function MainPageAccountSuggestionProfile({ user }) {
  const [globalState] = useContext(GlobalContext)
  const { userId } = globalState;
  const [isFollowed, setIsFollowed] = useState(false);
  const defaultStyle = "font-semibold text-gray-400 hover:text-gray-200 active:text-green-300"
  const activeStyle = "font-semibold text-green-400 cursor-no-drop"

  async function userFollowed() {
    setIsFollowed(prevVal => !prevVal);
    const resFollow = await followUser(userId, user);
    if (!resFollow) {
      setIsFollowed(false);
      console.error('Failed to follow user');
    }
  }

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
        className={isFollowed ? activeStyle : defaultStyle}
        onClick={userFollowed}
      // disabled={isFollowed}
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

MainPageAccountSuggestionProfile.whyDidYouRender = true;