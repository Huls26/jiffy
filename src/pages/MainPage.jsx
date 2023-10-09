import { lazy } from 'react';
import { useLoaderData } from 'react-router-dom';

import FilterTagSection from '@features/FilterTagSection';
// import HeadBanner from '@features/HeadBanner';
const SuspenseMainPage = lazy(() => import('@components/Mainpage'));

// remove HeadBanner: to be continued feature
// check loader in router
export default function MainPage() {
  const { querySnapshot } = useLoaderData();

  return (
    <main className="pt-16 pb-7">
      <FilterTagSection />
      {/* <HeadBanner /> */}
      <SuspenseMainPage querySnapshot={querySnapshot} />
    </main>
  );
}
