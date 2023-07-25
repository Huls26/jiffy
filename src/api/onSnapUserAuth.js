import { getAuth } from 'firebase/auth';
import { redirect } from 'react-router-dom';

export default function onSnapUserAuth() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const { uid } = user;
    return { uid };
  }
  return { uid: '' };
}

export function getCurrentUser() {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export async function loader() {
  // const urlId = params.id;
  const user = await getCurrentUser();
  // const isValidAuth = urlId === user?.uid;

  if (!user?.uid) {
    return redirect('/');
  }
  // return { isValidAuth };
  return null;
}
