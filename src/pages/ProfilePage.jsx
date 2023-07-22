import {
  useEffect,
} from 'react';
import {
  useNavigate, useParams,
} from 'react-router-dom';

import UserProfile from '@features/UserProfile';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <main>
      <UserProfile />
    </main>
  );
}
