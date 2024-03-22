/* eslint-disable react/jsx-no-bind */
import { lazy } from 'react';

import useHandleSearchParams from '@/hooks/useHandleSearchParams';

const UserInfoEditForm = lazy(() => import('./components/UserInfoEditForm'));
const UserProfileBannerEditForm = lazy(() => import('./components/UserProfileBannerEditForm'));

export default function ProfileEditForm() {
  const {
    searchParams,
    handleSetSearchParams,
  } = useHandleSearchParams();
  const isProfileEdit = searchParams.get('profile');
  const editProfilePhoto = isProfileEdit && isProfileEdit === 'edit';
  const editProfileInfo = isProfileEdit && isProfileEdit === 'editInfo';
  const editFormWidth = editProfilePhoto ? 'w-72' : 'w-96';

  return (
    isProfileEdit
      && (
      <main className={`
    ${editFormWidth} absolute top-32 left-1/2 -translate-x-1/2 
    bg-aqua-3 border border-r-2 border-b-2 rounded-lg shadow-2xl`}
      >
        {editProfilePhoto
      && (
      <UserProfileBannerEditForm handleButton={handleSetSearchParams} />
      )}
        {editProfileInfo
      && (
        <UserInfoEditForm handleButton={handleSetSearchParams} />
      )}
      </main>
      )
  );
}
