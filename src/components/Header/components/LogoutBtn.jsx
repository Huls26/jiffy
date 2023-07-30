import { useContext } from 'react';
import { Link } from 'react-router-dom';

import logoutUserAPI from '@api/logoutUserAPI';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';

export default function LogoutBtn() {
  const userData = useContext(dataContext);
  const [, dispatch] = userData;

  return (
    <Link to="/">
      <ContentBtn text="Logout" onClick={() => logoutUserAPI(dispatch)} />
    </Link>
  );
}
