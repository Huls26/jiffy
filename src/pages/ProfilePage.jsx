import { lazy } from 'react';

const UserProfile = lazy(() => import('@features/UserProfile'));

export default function ProfilePage() {
  return (
    <main>
      <UserProfile />
    </main>
  );
}
