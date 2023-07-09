import {
  memo,
  // useContext,
} from 'react';
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
// import { dataContext } from '@App';

// to do
// when user click comment, update, profile
// user should redirect to decignated path
// add sign out button,
// to profile page
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

function MainPage() {
  const { querySnapshot } = useLoaderData();
  // const [userDetails] = useContext(dataContext);
  // console.log(userDetails);
  console.log('render Mainpage');
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

const MemoMainPage = memo(MainPage);
export default MemoMainPage;
