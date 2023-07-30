import { useContext } from 'react';
import { Link } from 'react-router-dom';

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

    ? (
      <div className="space-x-1">
        <ContentBtn text="edit" bg="bg-aqua-1" />
        <Link to="/">
          <ContentBtn text="Logout" onClick={() => logoutUserAPI(dispatch)} />
        </Link>
      </div>
    )
    : (
      <div className="flex space-x-2 items-center">
        <CreatePostBtn />
        <UserPhoto />
      </div>
    );

  return (
    logoutUserPhoto
  );
}
