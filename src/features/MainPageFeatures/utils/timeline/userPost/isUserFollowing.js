import getUserData from "./getUserData";

/**
 * Checks if the current user is following a specific user based on their IDs.
 *
 * @param {string} postUserId - The ID of the user whose profile is being viewed.
 * @param {string} currentUserId - The ID of the current user.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the current user is following the specified user.
 *
 * @example
 * import isUserFollowing from './utils/timeline/userPost/isUserFollowing';
 *
 * const postUserId = '123';
 * const currentUserId = '456';
 *
 * isUserFollowing(postUserId, currentUserId)
 *   .then((isFollowing) => {
 *     console.log(isFollowing); // Output: true or false
 *   });
 */
export default async function isUserFollowing(currentUserId, postUserId) {
  const data = await getUserData(postUserId);

  if (!data || !data.followers) {
    return false; // Handle cases where followers array doesn't exist
  }

  return data.followers.includes(currentUserId);
}
