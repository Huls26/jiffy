import { lazy } from 'react';

const UserProfile = lazy(() => import('@features/UserProfile'));

export default function ProfilePage() {
  return (
    <main className="pt-24">
      <UserProfile />
    </main>
  );
}
