import useCheckId from '@hooks/useCheckId';
import ContentBtn from '@components/Btn/ContentBtn';

import CreatePostBtn from './CreatePostBtn';
import UserPhoto from './UserPhoto';

// add logout user
// clean up
export default function UserCreatePostProfile() {
  const isOwnProfile = useCheckId();
  const logoutUserPhoto = isOwnProfile
    ? <ContentBtn text="Logout" onClick={() => console.log('logout user')} />
    : (
      <div className="flex space-x-2 items-center">
        <CreatePostBtn onClick={() => console.log('createPost')} />
        <UserPhoto />
      </div>
    );

  return (
    logoutUserPhoto
  );
}
