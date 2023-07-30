import { lazy } from 'react';

const Header = lazy(() => import('./components/Header'));

export default function UserProfile() {
  return (
    <>
      <Header />
      {/* the data should fetch from the user */}
      {/* <section>
        <Contents />
      </section> */}
    </>
  );
}
