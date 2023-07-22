import {
  useEffect,
} from 'react';
import {
  useLoaderData,
  useNavigate, useParams,
} from 'react-router-dom';

import { getCurrentUser } from '@api/onSnapUserAuth';
import UserProfile from '@features/UserProfile';

export async function loader({ params }) {
  const urlId = params.id;
  const user = await getCurrentUser();

  return { urlId, userId: user.uid };
}

export default function ProfilePage() {
  const urlId = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(urlId);
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
