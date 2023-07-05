import { Suspense } from 'react';
import {
  defer,
  Await,
  useLoaderData,
} from 'react-router-dom';
import {
  collection, getDocs,
  // doc, setDoc,
} from 'firebase/firestore';

import { db } from '@api/FB';

import FilterTagSection from '@features/FilterTagSection';
import HeadBanner from '@features/HeadBanner';
import Contents from '@features/Contents';

// to do
// X make a sample Post data from firebase
// may a context
// X fetch data from firebase
// X add loading section,
// X loader data, defer, await, suspence
// X then change the proptype to isRequired because loading component will run
// X when fetch data from firestore
// X firestore: add peopleLikes array of id that likes your posts
// add create context and useReducer to set a state
// when working with context use memo
// add a context folder and reducer to organize
// to prevent from rendering children components
// if you like the posts the color of button should be green else bg-aqua-1
// add filter: type value instead of comedy, video
// filterTagSection type: Text, meme, photo
// X fix key prop in MapContents
// clean up

export async function loader() {
  const col = collection(db, 'posts');
  const querySnapshot = getDocs(col);

  return defer({
    querySnapshot,
  });
}

export default function MainPage() {
  const { querySnapshot } = useLoaderData();
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
    <main className="pb-7">
      <FilterTagSection />
      <HeadBanner />
      <Suspense fallback={<h1>...Loading</h1>}>
        <Await resolve={querySnapshot}>
          {
            (data) => <Contents querySnapshot={data.docs} />
          }
        </Await>
        <h1 className="text-center text-gray mt-5">Ow hi there you&apos;ve reach the bottom part</h1>
      </Suspense>
    </main>
  );
}
