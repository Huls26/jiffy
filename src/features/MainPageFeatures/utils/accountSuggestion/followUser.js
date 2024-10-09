import { db } from "@/lib/fb";

import { arrayUnion, doc, increment, updateDoc } from "firebase/firestore";

export default async function followUser(userId, user) {
  const currentUserRef = doc(db, "users", userId);
  const usersFollowingRef = doc(db, "users", user.userId);

  await updateDoc(currentUserRef, {
    following: arrayUnion(user.userId),
  });
  await updateDoc(usersFollowingRef, {
    followers: arrayUnion(userId),
    followersCount: increment(1),
  });
}
