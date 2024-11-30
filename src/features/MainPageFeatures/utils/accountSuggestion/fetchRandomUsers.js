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
  try {
    // const docRef = doc(db, "users", userId);
    // const docSnap = await getDoc(docRef);

    // if (!docSnap.exists()) {
    //   throw new Error("User document does not exist.");
    // }

    // const docData = docSnap.data();
    // const excludedUsers = [...(docData.following || []), userId];

    // if (excludedUsers.length > 10) {
    //   throw new Error("Following list exceeds the Firestore 'not-in' limit.");
    // }

    // console.log('remember this is has a limit of 10 users')
    // // Query to fetch users excluding the current user and their following
    // const q = query(
    //   collection(db, "users"),
    //   where("userId", "not-in", excludedUsers),
    //   limit(10),
    // );

    // const querySnapshot = await getDocs(q);
    // const randomUsers = querySnapshot.docs
    //   .sort(() => Math.random() - 0.5) // Shuffle array
    //   .slice(0, 3) // Select first 3 users from shuffled list
    //   .map((doc) => {
    //     const userProfile = doc.data();
    //     return {
    //       userId: userProfile.userId,
    //       username: userProfile.username,
    //       email: userProfile.email,
    //       photoURL: userProfile.photoURL,
    //       followersCount: userProfile.followersCount || 0,
    //       followers: userProfile.followers || [],
    //     };
    //   });
    const q = query(collection(db, "users"), where("userId", "!=", userId));
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
  } catch (err) {
    console.error("Error fetching users:", err);
    return []; // Return an empty array if an error occurs
  }
}
