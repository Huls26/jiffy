import isUserFollowing from '../../utils/timeline/userPost/isUserFollowing';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom React hook to manage the follower state of a user post.
 *
 * @param {string} userId - The ID of the user for whom the follower state is being managed.
 * @param {string} userPostId - The ID of the user post for which the follower state is being managed.
 *
 * @returns {[boolean, function]} - An array containing the current follower state and a function to update it.
 */
export default function useFollowerState(userId, userPostId) {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    isUserFollowing(userId, userPostId)
      .then((res) => {
        setIsFollowing(res);
      });
  }, [userId, userPostId]);

  return (
    [isFollowing, setIsFollowing]
  )
}

useFollowerState.propTypes = {
  userId: PropTypes.string.isRequired,
  userPostId: PropTypes.string.isRequired
}