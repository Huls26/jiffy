import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@api/FB';

export async function updatePostLikeFirebase(
  contentId,
  userId,
  likes,
  peopleLikes,
) {
  if (userId) {
    const contentRef = doc(db, 'posts', contentId);
    await updateDoc(contentRef, {
      likes,
      peopleLikes,
    });
  }
}

export async function updateUserFollowers(
  createdBy,
  contentId,
  userId,
  followers,
  peopleFollows,
) {
  if (userId) {
    const userDocRef = doc(db, 'users', createdBy);
    const postDocRef = doc(db, 'posts', contentId);
    await updateDoc(userDocRef, {
      followers,
      peopleFollows,
    });
    await updateDoc(postDocRef, {
      followers,
      peopleFollows,
    });
  }
}
