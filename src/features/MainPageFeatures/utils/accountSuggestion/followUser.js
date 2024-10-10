import { db } from "@/lib/fb";

import { doc, getDoc, increment, updateDoc } from "firebase/firestore";

export default async function followUser(userId, suggestionUser) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", suggestionUser.userId);

  const docSnap = (await getDoc(currentUserRef)).data();

  await updateDoc(currentUserRef, {
    following: {
      ...docSnap.following,
      [suggestionUser.userId]: suggestionUser.userId,
    },
  });
  await updateDoc(usersFollowingRef, {
    followers: { ...suggestionUser.followers, [userId]: userId },
    followersCount: increment(1),
  });
}
