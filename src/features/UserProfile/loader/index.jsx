import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import {
  redirect,
} from 'react-router-dom';

import { db } from '@api/FB';
import getUsersData from '@api/getUser';
import { getCurrentUser } from '@api/onSnapUserAuth';

export default async function loader({ params }) {
  const urlId = params.id;
  const user = await getCurrentUser();
  const me = urlId === user?.uid;

  // fetch user posts data
  const q = query(collection(db, 'posts'), where('createdBy', '==', urlId));
  const querySnapshot = await getDocs(q);

  if (!user?.uid) {
    return redirect('/');
  } if (!me) {
    const userData = await getUsersData(urlId);
    return { userData, querySnapshot };
  }

  return { me, querySnapshot };
}
