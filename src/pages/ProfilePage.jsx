import { lazy } from 'react';
import ProfileEditForm from '@features/ProfileEditForm';
import useResetScrollView from '@hooks/useResetScrollView';

const UserProfile = lazy(() => import('@features/UserProfile'));

export default function ProfilePage() {
  useResetScrollView();

  return (
    // remove padding when user post is available
    <main className="pt-24 pb-80">
      <UserProfile />
      <ProfileEditForm />
    </main>
  );
}
