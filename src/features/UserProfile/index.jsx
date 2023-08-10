import { lazy } from 'react';

import UserPosts from './components/UserPosts';

const Header = lazy(() => import('./components/Header'));

export default function UserProfile() {
  return (
    <>
      <Header />
      <UserPosts />
      {/* the data should fetch from the user */}
      {/* <section>
        <Contents />
      </section> */}
    </>
  );
}
