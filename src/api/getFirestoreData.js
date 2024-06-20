import {
  collection, query, where, getDocs, orderBy,
} from 'firebase/firestore';
import { db } from '@/api/FB';

export default async function getFirestoreData(callback) {
  const q = callback({
    query, collection, db, posts: 'posts', where, orderBy,
  });
  const querySnapshot = await getDocs(q);

  return querySnapshot;
}
