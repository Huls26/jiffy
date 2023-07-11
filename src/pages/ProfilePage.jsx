import { useContext, useEffect } from 'react';
import {
  useNavigate,
} from 'react-router-dom';

import UserProfile from '@features/UserProfile';
import { dataContext } from '@context/dataContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [userDetails] = useContext(dataContext);
  const { userId } = userDetails;

  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, [navigate, userId]);

  return (
    <main>
      <UserProfile />
    </main>
  );
}
