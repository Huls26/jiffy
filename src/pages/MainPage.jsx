import {
  memo,
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

export async function loader() {
  const col = collection(db, 'posts');
  const querySnapshot = getDocs(col);

  return defer({
    querySnapshot,
  });
}

function MainPage() {
  const { querySnapshot } = useLoaderData();

  console.log('render Mainpage');

  return (
    <main className="pt-16 pb-7">
      <FilterTagSection />
      <HeadBanner />
      <SuspenseMainPage querySnapshot={querySnapshot} />
    </main>
  );
}

const MemoMainPage = memo(MainPage);
export default MemoMainPage;
