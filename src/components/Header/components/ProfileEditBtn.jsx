import { useSearchParams } from 'react-router-dom';
import ContentBtn from '@/components/Btn/ContentBtn';

export default function ProfileEditBtn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const displayEditBtn = searchParams.get('profile');

  // add searchParams key=profile, value=edit
  function handleEditProfile(key, value) {
    setSearchParams((prevParams) => {
      if (value) {
        prevParams.set(key, value);
      } else {
        prevParams.delete(key);
      }

      return prevParams;
    });
  }
  return (
    // display edit button
    !displayEditBtn && <ContentBtn text="edit" bg="bg-aqua-1" onClick={(() => handleEditProfile('profile', 'edit'))} />
  );
}
