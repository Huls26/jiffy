// import {
//   // useEffect,
// } from 'react';
import {
  useLoaderData,
  // useNavigate, useParams,
  redirect,
} from 'react-router-dom';

import { getCurrentUser } from '@api/onSnapUserAuth';
import UserProfile from '@features/UserProfile';

export async function loader({ params }) {
  const urlId = params.id;
  const user = await getCurrentUser();
  const isValidAuth = urlId === user?.uid;

  if (!isValidAuth) {
    return redirect('/');
  }
  return { isValidAuth };
}

export default function ProfilePage() {
  const { isValidAuth } = useLoaderData();
  // const navigate = useNavigate();
  // const { id } = useParams();

  console.log(isValidAuth);
  // useEffect(() => {
  //   if (!id) {
  //     navigate('/');
  //   }
  // }, [id, navigate]);

  return (
    <main>
      <UserProfile />
    </main>
  );
}
