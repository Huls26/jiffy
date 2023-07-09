import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '@context/dataContext';

import ContentBtn from '@components/Btn/ContentBtn';
import UserCreatePostProfile from './UserCreatePostProfile';

export default function UserLogin() {
  const [userDetails] = useContext(dataContext);
  const { userId } = userDetails;
  // const location = useLocation();
  // const currentURLPath = location.pathname.slice(1);
  const LinktoLogin = (
    <Link to="login" preventScrollReset>
      <ContentBtn text="<Login&#160;/>" bg="bg-aqua-1" />
    </Link>
  );
  // const displayLoginBtn = !currentURLPath && LinktoLogin;

  return (
    <>
      {userId ? <UserCreatePostProfile /> : LinktoLogin }
    </>
  );
}
