import { useContext } from 'react';

import logoutUserAPI from '@api/logoutUserAPI';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import useCheckId from '@hooks/useCheckId';

import CreatePostBtn from './CreatePostBtn';
import UserPhoto from './UserPhoto';

export default function UserCreatePostProfile() {
  const userData = useContext(dataContext);
  const dispatch = userData[1];

  const isOwnProfile = useCheckId();
  const logoutUserPhoto = isOwnProfile
    ? <ContentBtn text="Logout" onClick={() => logoutUserAPI(dispatch)} />
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
