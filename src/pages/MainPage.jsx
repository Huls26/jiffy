import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@api/FB';

import FilterTagSection from '@features/FilterTagSection';
import HeadBanner from '@features/HeadBanner';
import Contents from '@features/Contents';

export default function MainPage() {
  useEffect(() => {
    (async function readData() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }());
  }, []);
  return (
    <main>
      <FilterTagSection />
      <HeadBanner />
      <Contents />
    </main>
  );
}
