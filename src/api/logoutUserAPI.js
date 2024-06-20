import { getAuth, signOut } from 'firebase/auth';

export default async function logoutUserAPI(dispatch) {
  const auth = getAuth();
  signOut(auth).then(() => {
    dispatch({
      type: 'SET_USERID',
      id: '',
    });
    localStorage.clear();
  }).catch((error) => {
    throw new Error(error.message);
  });
}
