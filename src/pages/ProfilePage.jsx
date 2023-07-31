import { lazy } from 'react';
import ProfileEditForm from '@features/ProfileEditForm';

const UserProfile = lazy(() => import('@features/UserProfile'));

export default function ProfilePage() {
  return (
    // remove padding when user post is available
    <main className="pt-24 pb-80">
      <UserProfile />
      <ProfileEditForm />
    </main>
  );
}
