import { db } from "@/lib/fb";
import { collection, getDocs, query, where } from "firebase/firestore";

/**
 * Fetches random user profiles from the Firestore collection 'users' excluding the current user.
 *
 * @param {string} userId - The unique identifier of the current user.
 * @returns {Promise<Array<{ userId: string, username: string, email: string, photoURL: string, followersCount: number }>>}
 * An array of up to 3 random user profiles, excluding the current user.
 * If no suggestions are available, an empty array is returned.
 */
export default async function fetchUsers(userId) {
  console.log("where(userId, not-in, [...following, userId]");
  console.log("where(following, array-contains, userId)");
  const q = query(
    collection(db, "users"),
    where("following", "array-contains", userId),
  );
  const docSnap = await getDocs(q);

  console.log("testing");
  console.log(docSnap.docs);
  try {
    const q = query(collection(db, "users"), where("userId", "!=", userId));
    // const q2 = query(collection(db, "users"), where("following", "", );
    const querySnapshot = await getDocs(q);

    // Filter users who do not have userId in their followers array
    const filteredUsers = querySnapshot.docs.filter((doc) => {
      const docUser = doc.data();

      // Check if userId is not included in followers
      console.log("update this filter");
      return !docUser.followers.includes(userId);
    });

    if (filteredUsers.length === 0) {
      return []; // Return an empty array if no suggestions available
    }

    // Randomly select up to 3 users
    const randomUsers = filteredUsers
      .sort(() => Math.random() - 0.5) // Shuffle array
      .slice(0, 3) // Select first 3 users from shuffled list
      .map((doc) => {
        const userProfile = doc.data();
        return {
          userId: userProfile.userId,
          username: userProfile.username,
          email: userProfile.email,
          photoURL: userProfile.photoURL,
          followersCount: userProfile.followersCount,
          followers: userProfile.followers,
        };
      });

    return randomUsers;
  } catch (error) {
    console.error("Error fetching user suggestions:", error);
    return [];
  }
}
