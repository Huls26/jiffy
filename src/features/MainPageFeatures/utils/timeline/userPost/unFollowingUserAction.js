import getUserData from "./getUserData";
import { db } from "@/lib/fb";

import { doc, arrayRemove, increment, updateDoc } from "firebase/firestore";

/**
 * Function to handle the unfollow user action in a social media application.
 *
 * @param {string} userId - The ID of the user performing the unfollow action.
 * @param {string} unFollowingUserId - The ID of the user being unfollowed.
 *
 * @returns {Promise<void>} - A promise that resolves when the unfollow action is completed.
 */
export default async function unFollowingUserAction(userId, unFollowingUserId) {
  // Create references to the user and the user being unfollowed in the Firestore database
  const userRef = doc(db, "users", userId);
  const followingRef = doc(db, "users", unFollowingUserId);

  // Retrieve the user being unfollowed's data
  const followingData = await getUserData(unFollowingUserId);

  // Update the user's document by removing the unFollowingUserId from the following array field
  await updateDoc(userRef, {
    following: arrayRemove(unFollowingUserId),
  });

  // Update the user being unfollowed's document by removing the userId from the followers array field
  // and decrementing the followersCount field by 1 if it's greater than 0, otherwise setting it to 0
  await updateDoc(followingRef, {
    followers: arrayRemove(userId),
    followersCount: followingData.followersCount > 0 ? increment(-1) : 0,
  });
}
