import { doc, getDoc } from 'firebase/firestore';
import { db } from './FB';

export default async function getUsersData(userId) {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  }

  return { username: 'No User' };
}
