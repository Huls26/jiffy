import {
  memo,
  lazy,
} from 'react';
import {
  defer,
  useLoaderData,
} from 'react-router-dom';
// import {
//   collection, getDocs,
// } from 'firebase/firestore';

import getFirestoreData from '@api/getFirestoreData';
import FilterTagSection from '@features/FilterTagSection';

// import HeadBanner from '@features/HeadBanner';

const SuspenseMainPage = lazy(() => import('@components/Mainpage'));

// remove HeadBanner: to be continued feature
export async function loader({ request }) {
  const url = new URL(request.url);
  const filterTag = url.searchParams.get('f');
  const orderContent = filterTag === 'content' ? 'desc' : 'asc';

  const querySnapshot = getFirestoreData(({
    query, collection, orderBy, db, where,
  }) => (
    filterTag
      ? query(collection(db, 'posts'), where(filterTag, '!=', ''), orderBy(filterTag, orderContent))
      : query(collection(db, 'posts'), orderBy('date', 'desc'))
  ));

  return defer({
    querySnapshot,
  });
}

function MainPage() {
  const { querySnapshot } = useLoaderData();

  return (
    <main className="pt-16 pb-7">
      <FilterTagSection />
      {/* <HeadBanner /> */}
      <SuspenseMainPage querySnapshot={querySnapshot} />
    </main>
  );
}

const MemoMainPage = memo(MainPage);
export default MemoMainPage;
