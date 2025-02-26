import { doc, arrayUnion, increment, updateDoc } from "firebase/firestore";
import { db } from "@/lib/fb";

/**
 * Function to handle the follow user action in a social media application.
 *
 * @param {string} userId - The ID of the user performing the follow action.
 * @param {string} followingUserId - The ID of the user being followed.
 *
 * @returns {Promise<void>} - A promise that resolves when the follow action is completed.
 */
export default async function followUserAction(userId, followingUserId) {
  // Create references to the user and the user being followed in the Firestore database
  const userRef = doc(db, "users", userId);
  const followingRef = doc(db, "users", followingUserId);

  // Update the user's document by adding the followingUserId to the following array field
  await updateDoc(userRef, {
    following: arrayUnion(followingUserId),
  });
  // Update the user being followed's document by adding the userId to the followers array field
  // and incrementing the followersCount field by 1
  await updateDoc(followingRef, {
    followers: arrayUnion(userId),
    followersCount: increment(1),
  });
}
