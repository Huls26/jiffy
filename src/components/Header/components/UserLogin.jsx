import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '@api/FB';

import { dataContext } from '@context/dataContext';
// import useUserReducer from '@hooks/useUserReducer';

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
  // const displayLoginBtn = !currentURLPath && LinktoLogin;

  return (
    userId ? <UserCreatePostProfile /> : LinktoLogin
  );
}
