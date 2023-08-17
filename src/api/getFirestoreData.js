import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import { db } from '@api/FB';

export default async function getFirestoreData(callback) {
  const q = callback({
    query, collection, db, posts: 'posts', where,
  });
  const querySnapshot = await getDocs(q);

  return querySnapshot;
}
