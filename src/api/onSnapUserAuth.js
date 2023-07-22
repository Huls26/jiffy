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

export function getCurrentUser() {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
