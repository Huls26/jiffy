import { useLoaderData } from 'react-router-dom';
import {
  collection, getDocs,
  // doc, setDoc,
} from 'firebase/firestore';

import { db } from '@api/FB';

import FilterTagSection from '@features/FilterTagSection';
import HeadBanner from '@features/HeadBanner';
import Contents from '@features/Contents';

// to do
// make a sample Post data from firebase
// may a context
// fetch data from firebase
// add loading section,
// loader data, defer, await, suspence
// then change the proptype to isRequired because loading component will run
// when fetch data from firestore
// clean up

export async function loader() {
  const col = collection(db, 'posts');
  const querySnapshot = await getDocs(col);

  return [...querySnapshot.docs];
}

export default function MainPage() {
  const querySnapshot = useLoaderData();
  // querySnapshot.forEach((docc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(docc.id, ' => ', docc.data());
  // });
  console.log(querySnapshot);

  // const testingData = {
  //   title: 'Hello world',
  //   content: 'url/helloworld',
  //   textContent: 'if content ? content : textContent',
  //   createdBy: 'ad1230',
  //   username: 'John Lee',
  //   description: 'random text short long it depends',
  //   likes: '12' || 12,
  //   date: new Date(),
  //   comments: [
  //     'userCommentid1',
  //     {
  //       commentBy: 'userId' || 'username',
  //       commentsText: 'comment goes here',
  //       commentLike: 'optional',
  //     },
  //     {
  //       commentBy: 'userId' || 'username',
  //       commentsText: 'comment goes here',
  //       commentLike: 'optional',
  //     },
  //   ],
  // };

  // async function addData() {
  //   await setDoc(doc(db, 'posts', 'addManually1'), testingData);
  // }

  // addData();

  return (
    <main>
      <FilterTagSection />
      <HeadBanner />
      <Contents querySnapshot={querySnapshot} />
    </main>
  );
}
