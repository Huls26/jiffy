import {
  defer,
  useLoaderData,
} from 'react-router-dom';
import {
  collection, getDocs,
  // doc, setDoc,
} from 'firebase/firestore';

import { db } from '@api/FB';

import SuspenseMainPage from '@components/Mainpage';
import FilterTagSection from '@features/FilterTagSection';
import HeadBanner from '@features/HeadBanner';
// import Contents from '@features/Contents';

// to do
// X make a sample Post data from firebase
// may a context
// X fetch data from firebase
// X add loading section,
// X loader data, defer, await, suspence
// X then change the proptype to isRequired because loading component will run
// X when fetch data from firestore
// X firestore: add peopleLikes array of id that likes your posts
// X add create context and useReducer to set a state
// X fix key prop in MapContents
// X add a context folder and reducer to organize
// X if you like the posts the color of button should be green else bg-aqua-1
// update posts firebase
// when working with context use memo
// to prevent from rendering children components
// add filter: type value instead of comedy, video
// filterTagSection type: Text, meme, photo
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
  //   content: 'https://images.pexels.com/photos/3768263/
  // pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   textContent: 'if content ? content : textContent',
  //   createdBy: 'ad1230',
  //   username: 'John Lee',
  //   description: 'random text short long it depends',
  //   likes: 0,
  //   peopleLikes: [],
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
  //   await setDoc(doc(db, 'posts', 'addManuallyTesting2'), testingData);
  // }

  // addData();

  return (
    <main className="pb-7">
      <FilterTagSection />
      <HeadBanner />
      <SuspenseMainPage querySnapshot={querySnapshot} />
    </main>
  );
}
