import {
  updateEmail,
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@api/FB';
import { getCurrentUser } from '@api/onSnapUserAuth';

export default async function updateUserEmailInfo(
  newEmail,
  userId,
  newUserData,
) {
  try {
    if (newEmail) {
      const auth = await getCurrentUser();
      if (auth?.uid) {
        await updateEmail(auth, newEmail);
      }
    }
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, newUserData);

    return { error: false, update: 'Info' };
  } catch (error) {
    const errorMessage = error?.code.replace('auth/', '').split('-').join(' ');
    return { error: true, errorM: errorMessage };
  }
}
