/* eslint-disable react/jsx-no-bind */
import { useSearchParams } from 'react-router-dom';
import UserInfoEditForm from './components/UserInfoEditForm';
import UserProfileBannerEditForm from './components/UserProfileBannerEditForm';

export default function ProfileEditForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isProfileEdit = searchParams.get('profile');
  const editProfilePhoto = isProfileEdit && isProfileEdit === 'edit';
  const editProfileInfo = isProfileEdit && isProfileEdit === 'editInfo';
  const editFormWidth = editProfilePhoto ? 'w-72' : 'w-96';

  function handleParamsButton(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    <main className={`
    ${editFormWidth} absolute top-32 left-1/2 -translate-x-1/2 
    bg-aqua-3 border border-r-2 border-b-2 rounded-lg shadow-2xl`}
    >
      {editProfilePhoto
      && (
      <UserProfileBannerEditForm handleButton={handleParamsButton} />
      )}
      {editProfileInfo
      && (
        <UserInfoEditForm handleButton={handleParamsButton} />
      )}
    </main>
  );
}
