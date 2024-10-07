import { db } from "@/lib/fb";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function fetchUsers(userId) {
  try {
    const q = query(
      collection(db, "users"),
      where("following", "not-in", [userId]),
    );

    const querySnapshot = await getDocs(q);

    // Filter out the current user's own profile
    const filteredUsers = querySnapshot.docs.filter(
      (doc) => doc.data().userId !== userId,
    );

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
        };
      });

    return randomUsers;
  } catch (error) {
    console.error("Error fetching user suggestions:", error);
    return [];
  }
}
