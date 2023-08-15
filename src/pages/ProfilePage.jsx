import {
  lazy,
  memo,
} from 'react';

import useResetScrollView from '@hooks/useResetScrollView';

const UserProfile = lazy(() => import('@features/UserProfile'));
const ProfileEditForm = lazy(() => import('@features/ProfileEditForm'));

function ProfilePage() {
  useResetScrollView();

  return (
    <main className="pt-24 pb-9">
      <UserProfile />
      <ProfileEditForm />
    </main>
  );
}

const MemoProfilePage = memo(ProfilePage);
export default MemoProfilePage;
