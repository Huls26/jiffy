import { db } from "@/lib/fb";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";

/**
 * A function to handle user following in a social media application.
 * It updates the current user's following list and the target user's followers count in Firestore.
 *
 * @param {string} userId - The ID of the current user.
 * @param {Object} followingUser - The user object to be followed.
 * @param {string} followingUser.userId - The ID of the user to be followed.
 * @param {number} followingUser.followersCount - The current number of followers of the user to be followed.
 *
 * @returns {Promise<boolean>} - A promise that resolves to true if the operation is successful, otherwise false.
 */
export default async function followUser(userId, followingUser) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", followingUser.userId);

  try {
    // Fetch the current user's document
    const currentUserSnap = await getDoc(currentUserRef);

    if (!currentUserSnap.exists()) {
      // Check if the document exists
      throw new Error(`User with ID ${userId} does not exist.`);
    }
    const currentUserData = currentUserSnap.data();
    const currentFollowing = currentUserData.following || [];

    // Check if the current user is following the target user
    const isUserFollowed = currentFollowing.includes(followingUser.userId);

    if (!isUserFollowed) {
      // Add the user to the following list and increment followers count
      await updateDoc(currentUserRef, {
        following: arrayUnion(followingUser.userId),
      });
      await updateDoc(usersFollowingRef, {
        followers: arrayUnion(userId),
        followersCount: increment(1),
      });
    } else {
      // Remove the user from the following list and decrement followers count
      await updateDoc(currentUserRef, {
        following: arrayRemove(followingUser.userId),
      });
      await updateDoc(usersFollowingRef, {
        followers: arrayRemove(userId),
        followersCount: followingUser.followersCount > 0 ? increment(-1) : 0,
      });
    }
    return true;
  } catch (err) {
    console.error("Error following user:", err);
    return false;
  }
}
