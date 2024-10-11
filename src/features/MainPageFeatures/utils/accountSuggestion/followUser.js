import { db } from "@/lib/fb";
import { doc, getDoc, increment, runTransaction } from "firebase/firestore";

export default async function followUser(userId, followingUser) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", followingUser.userId);

  try {
    // Fetch the current user's document
    const currentUserSnap = await getDoc(currentUserRef);

    // Check if the document exists
    if (!currentUserSnap.exists()) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    const currentUserData = currentUserSnap.data();

    // Update the current user's following list and the suggested user's followers
    await runTransaction(db, async (transaction) => {
      transaction.update(currentUserRef, {
        following: {
          ...currentUserData.following,
          [followingUser.userId]: followingUser.userId,
        },
      });

      transaction.update(usersFollowingRef, {
        followers: {
          ...followingUser.followers,
          [userId]: userId,
        },
        followersCount: increment(1),
      });
    });

    return true;
  } catch (error) {
    // biome-ignore lint/nursery/noConsole: <explanation>
    console.error("Error following user:", error);
    return false; // Rethrow the error if needed
  }
}
