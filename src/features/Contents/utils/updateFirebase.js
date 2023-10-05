import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@api/FB';

export default async function updateFirebase(
  userId,
  contentId,
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

function debounce(callback) {
  let updateData;

  return (
    (userId, contentId, likes, peopleLikes) => {
      clearTimeout(updateData);
      updateData = setTimeout(() => callback(
        userId,
        contentId,
        likes,
        peopleLikes,
      ), 360);
    }
  );
}

// create closure
export const handleLikeFirebase = debounce(updateFirebase);
