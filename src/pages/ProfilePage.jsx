import { lazy } from 'react';

import useResetScrollView from '@hooks/useResetScrollView';

const UserProfile = lazy(() => import('@features/UserProfile'));
const ProfileEditForm = lazy(() => import('@features/ProfileEditForm'));

export default function ProfilePage() {
  useResetScrollView();

  return (
    <main className="pt-24 pb-9">
      <UserProfile />
      <ProfileEditForm />
    </main>
  );
}
