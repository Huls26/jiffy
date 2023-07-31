import { useSearchParams } from 'react-router-dom';
import UserProfileBannerEditForm from './components/UserProfileBannerEditForm';

export default function ProfileEditForm() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('profile'));

  return (
    <main className="w-72 absolute top-32 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-2xl">
      <UserProfileBannerEditForm />
    </main>
  );
}
