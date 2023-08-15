import {
  memo,
  lazy,
} from 'react';
import {
  defer,
  useLoaderData,
} from 'react-router-dom';
import {
  collection, getDocs,
} from 'firebase/firestore';

import { db } from '@api/FB';
import FilterTagSection from '@features/FilterTagSection';
import HeadBanner from '@features/HeadBanner';

const SuspenseMainPage = lazy(() => import('@components/Mainpage'));

export async function loader() {
  const col = collection(db, 'posts');
  const querySnapshot = getDocs(col);

  return defer({
    querySnapshot,
  });
}

function MainPage() {
  const { querySnapshot } = useLoaderData();

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
