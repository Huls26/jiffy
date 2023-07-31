import { useSearchParams } from 'react-router-dom';
import UserInfoEditForm from './components/UserInfoEditForm';
import UserProfileBannerEditForm from './components/UserProfileBannerEditForm';

export default function ProfileEditForm() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('profile'));

  // change width when user edit user info
  // userProfileBannerEditForm: w-72
  // UserInfoEditForm: w-80
  return (
    <main className="w-96 absolute top-32 left-1/2 -translate-x-1/2 bg-aqua-3 border border-r-2 border-b-2 rounded-lg shadow-2xl">
      {false && <UserProfileBannerEditForm />}
      {true && <UserInfoEditForm />}
    </main>
  );
}
