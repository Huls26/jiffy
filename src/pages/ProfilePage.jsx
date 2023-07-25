import { lazy } from 'react';
import {
  redirect,
} from 'react-router-dom';

import { getCurrentUser } from '@api/onSnapUserAuth';

const UserProfile = lazy(() => import('@features/UserProfile'));

export async function loader({ params }) {
  const urlId = params.id;
  const user = await getCurrentUser();
  const isValidAuth = urlId === user?.uid;

  if (!isValidAuth) {
    return redirect('/');
  }
  // return { isValidAuth };
  return null;
}

export default function ProfilePage() {
  return (
    <main>
      <UserProfile />
    </main>
  );
}
