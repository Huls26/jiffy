import FilterTagSection from '@features/FilterTagSection';
import HeadBanner from '@features/HeadBanner';
import Contents from '@features/Contents';

export default function MainPage() {
  return (
    <main>
      <FilterTagSection />
      <HeadBanner />
      <Contents />
    </main>
  );
}
