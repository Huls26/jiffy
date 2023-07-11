import { getAuth } from 'firebase/auth';

export default function onSnapUserAuth() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const { uid } = user;
    return { uid };
  }
  return { uid: '' };
}
