import { db } from "@/lib/fb";
import { doc, getDoc, increment, runTransaction } from "firebase/firestore";

export default async function followUser(userId, followingUser) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", followingUser.userId);

  console.log("use arrayRemove and arrayUpdate in firestore");
  try {
    // Fetch the current user's document
    const currentUserSnap = await getDoc(currentUserRef);

    // Check if the document exists
    if (!currentUserSnap.exists()) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    const currentUserData = currentUserSnap.data();
    const isUserFollow = currentUserData.following[followingUser.userId];

    // Update the current user's following list and the suggested user's followers
    await runTransaction(db, async (transaction) => {
      const currentUserFollowing = currentUserData.following || {};
      const followingUserFollowers = followingUser.followers || {};

      if (!isUserFollow) {
        // If the user is not already followed, add them
        if (!currentUserFollowing[followingUser.userId]) {
          transaction.update(currentUserRef, {
            following: {
              ...currentUserFollowing,
              [followingUser.userId]: followingUser.userId,
            },
          });

          transaction.update(usersFollowingRef, {
            followers: {
              ...followingUserFollowers,
              [userId]: userId,
            },
            followersCount: increment(1), // Increase followers count
          });
        }
      } else {
        // If the user is followed, remove them
        if (currentUserFollowing[followingUser.userId]) {
          const { [followingUser.userId]: _, ...updatedFollowing } =
            currentUserFollowing;
          const { [userId]: __, ...updatedFollowers } = followingUserFollowers;

          transaction.update(currentUserRef, {
            following: updatedFollowing,
          });

          transaction.update(usersFollowingRef, {
            followers: updatedFollowers,
            followersCount:
              followingUser.followersCount > 0 ? increment(-1) : 0,
          });
        }
      }
    });

    return true;
  } catch (error) {
    // biome-ignore lint/nursery/noConsole: <explanation>
    console.error("Error following user:", error);
    return false; // Rethrow the error if needed
  }
}
