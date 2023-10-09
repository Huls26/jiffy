import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { dataContext } from '@context/dataContext';

import ContentBtn from '@components/Btn/ContentBtn';

import UserCreatePostProfile from './UserCreatePostProfile';

export default function UserLogin() {
  const [userDetails] = useContext(dataContext);
  const { userId } = userDetails;

  const LinktoLogin = (
    <Link to="login" preventScrollReset>
      <ContentBtn text="<Login&#160;/>" bg="bg-aqua-1" />
    </Link>
  );

  return (
    userId ? <UserCreatePostProfile /> : LinktoLogin
  );
}
