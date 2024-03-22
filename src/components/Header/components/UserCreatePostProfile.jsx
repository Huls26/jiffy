import useCheckId from '@/hooks/useCheckId';

import CreatePostBtn from './CreatePostBtn';
import UserPhoto from './UserPhoto';
import ProfileEditBtn from './ProfileEditBtn';
import LogoutBtn from './LogoutBtn';

export default function UserCreatePostProfile() {
  const isOwnProfile = useCheckId();

  return (
    isOwnProfile
      ? (
        <div className="space-x-1">
          <ProfileEditBtn />
          <LogoutBtn />
        </div>
      )
      : (
        <div className="flex space-x-2 items-center">
          <CreatePostBtn />
          <UserPhoto />
        </div>
      )
  );
}
