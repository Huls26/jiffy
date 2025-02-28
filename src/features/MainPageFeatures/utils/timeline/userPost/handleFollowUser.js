import followUserAction from "./followUserAction";
import unFollowingUserAction from "./unFollowingUserAction";

/**
 * Handles the follow/unfollow user functionality for a user post.
 *
 * @param {boolean} isFollowing - Indicates whether the user is currently following the post's author.
 * @param {function} setIsFollowing - Function to update the follow/unfollow status.
 * @param {string} userId - The ID of the user performing the follow/unfollow action.
 * @param {string} userPostId - The ID of the user post being followed/unfollowed.
 *
 * @returns {Promise<void>}
 */
export default async function handleFollowUser(
  isFollowing,
  setIsFollowing,
  userId,
  userPostId,
) {
  try {
    if (!isFollowing) {
      // Add the user to the following list and increment followers count
      await followUserAction(userId, userPostId);
      setIsFollowing(true);
    } else {
      // Remove the user from the following list and decrement followers count
      await unFollowingUserAction(userId, userPostId);
      setIsFollowing(false);
    }
  } catch (err) {
    console.error("Error following user:", err);
  }
}
