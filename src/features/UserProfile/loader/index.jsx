// import {
//   collection, query, where, getDocs,
// } from 'firebase/firestore';
import {
  redirect,
} from 'react-router-dom';

// import { db } from '@api/FB';
import getUsersData from '@api/getUser';
import { getCurrentUser } from '@api/onSnapUserAuth';
import getFirestoreData from '@api/getFirestoreData';

export default async function loader({ request, params }) {
  const url = new URL(request.url);
  const filterTag = url.searchParams.get('f');
  const urlId = params.id;
  const user = await getCurrentUser();
  const me = urlId === user?.uid;

  console.log(filterTag);
  // fetch user posts data
  const querySnapshot = await getFirestoreData(({
    query, collection, db, where,
  }) => (
    filterTag
      ? query(collection(db, 'posts'), where('createdBy', '==', urlId), where(filterTag, '!=', ''))
      : query(collection(db, 'posts'), where('createdBy', '==', urlId))
  ));

  if (!user?.uid) {
    return redirect('/');
  } if (!me) {
    const userData = await getUsersData(urlId);
    return { userData, querySnapshot };
  }

  return { me, querySnapshot };
}

// export default async function loader({ params }) {
//   const urlId = params.id;
//   const user = await getCurrentUser();
//   const me = urlId === user?.uid;

//   // fetch user posts data
//   const q = query(collection(db, 'posts'), where('createdBy', '==', urlId));
//   const querySnapshot = await getDocs(q);

//   if (!user?.uid) {
//     return redirect('/');
//   } if (!me) {
//     const userData = await getUsersData(urlId);
//     return { userData, querySnapshot };
//   }

//   return { me, querySnapshot };
// }
