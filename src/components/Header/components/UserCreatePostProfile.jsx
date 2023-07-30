import { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import logoutUserAPI from '@api/logoutUserAPI';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import useCheckId from '@hooks/useCheckId';

import CreatePostBtn from './CreatePostBtn';
import UserPhoto from './UserPhoto';

export default function UserCreatePostProfile() {
  const userData = useContext(dataContext);
  const [, dispatch] = userData;
  // set to new component
  const [searchParams, setSearchParams] = useSearchParams();
  const displayEditBtn = searchParams.get('profile');

  const isOwnProfile = useCheckId();

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
    isOwnProfile
      ? (
        <div className="space-x-1">
          { !displayEditBtn && <ContentBtn text="edit" bg="bg-aqua-1" onClick={(() => handleEditProfile('profile', 'edit'))} />}
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
      )
  );
}
