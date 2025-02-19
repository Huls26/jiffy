import { db } from "@/lib/fb";
import { doc, getDoc } from "firebase/firestore";

export default async function getUserData(userId) {
  const userRef = doc(db, "users", userId);

  const userSnap = await getDoc(userRef);
  return userSnap.data();
}
