import { db } from "@/lib/fb";

import { doc, increment, updateDoc } from "firebase/firestore";

export default async function followUser(userId, user) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", user.userId);

  await updateDoc(currentUserRef, {
    following: { [user.userId]: user.userId },
  });
  await updateDoc(usersFollowingRef, {
    followers: { userId },
    followersCount: increment(1),
  });
}
