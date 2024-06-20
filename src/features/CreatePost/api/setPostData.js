import {
  doc, setDoc, updateDoc, arrayUnion,
} from 'firebase/firestore';
import {
  db,
} from '@/api/FB';

export default async function setPostData({
  newId, docData, keyContent, valueContent, title, userId, userData,
}) {
  await setDoc(doc(db, 'posts', newId), {
    ...docData,
    [keyContent]: valueContent,
    title,
  });
  await updateDoc(doc(db, 'users', userId), {
    ...userData,
    posts: arrayUnion(newId),
  });
}
