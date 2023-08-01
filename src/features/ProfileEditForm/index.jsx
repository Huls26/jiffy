import { useSearchParams } from 'react-router-dom';
import UserInfoEditForm from './components/UserInfoEditForm';
import UserProfileBannerEditForm from './components/UserProfileBannerEditForm';

export default function ProfileEditForm() {
  const [searchParams] = useSearchParams();
  const isProfileEdit = searchParams.get('profile');
  const editProfilePhoto = isProfileEdit && isProfileEdit === 'edit';
  const editProfileInfo = isProfileEdit && isProfileEdit === 'editInfo';
  const editFormWidth = editProfilePhoto ? 'w-72' : 'w-96';

  return (
    <main className={`
    ${editFormWidth} absolute top-32 left-1/2 -translate-x-1/2 
    bg-aqua-3 border border-r-2 border-b-2 rounded-lg shadow-2xl`}
    >
      {editProfilePhoto && <UserProfileBannerEditForm />}
      {editProfileInfo && <UserInfoEditForm />}
    </main>
  );
}
