import { db } from "@/lib/fb";
import {
  arrayRemove,
  arrayUnion,
  doc,
  increment,
  runTransaction,
} from "firebase/firestore";

export default async function followUser(userId, followingUser) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", followingUser.userId);

  try {
    // Run transaction to perform atomic updates
    await runTransaction(db, async (transaction) => {
      // Fetch current user and following user's documents within the transaction
      const currentUserSnap = await transaction.get(currentUserRef);
      const followingUserSnap = await transaction.get(usersFollowingRef);

      // Check if documents exist
      if (!currentUserSnap.exists() || !followingUserSnap.exists()) {
        throw new Error(`One or both users do not exist.`);
      }

      const followingUserData = followingUserSnap.data();
      const followersCount = followingUserData.followersCount || 0;

      // Check if user is already followed via subcollection
      const isUserFollow = followingUserData.followers.includes(userId);

      if (!isUserFollow) {
        // Add to following and increment followers count
        transaction.update(currentUserRef, {
          following: arrayUnion(followingUser.userId),
        });
        transaction.update(usersFollowingRef, {
          followers: arrayUnion(userId),
          followersCount: increment(1),
        });
      } else {
        // Remove from following and decrement followers count
        transaction.update(currentUserRef, {
          following: arrayRemove(followingUser.userId),
        });
        transaction.update(usersFollowingRef, {
          followers: arrayRemove(userId),
          followersCount: followersCount > 0 ? increment(-1) : 0,
        });
      }
    });

    return true;
  } catch (error) {
    console.error("Error following user:", error);
    return false;
  }
}
