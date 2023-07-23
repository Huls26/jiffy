import {
  useLoaderData,
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

  console.log(isValidAuth);
  return (
    <main>
      <UserProfile />
    </main>
  );
}
