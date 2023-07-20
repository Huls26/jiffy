import { useReducer, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@api/FB';
import reducerMethod, { INITIAL_STATE } from './contextReducer';

export default function useUserReducer() {
  const [detailsState, dispatch] = useReducer(reducerMethod, INITIAL_STATE);
  const auth = getAuth();
  const userId = detailsState.id;

  async function getData(uid, DP) {
    if (uid) {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        DP({
          type: 'SET_USERDATA',
          userData: docSnap.data(),
        });
      }
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid } = user;
        dispatch({
          type: 'SET_USERID',
          id: uid,
        });
        getData(uid, dispatch);
      } else {
        dispatch({
          type: 'SET_USERNAME',
          username: '',
        });
      }
    });
  }, [auth, userId]);
  return [detailsState, dispatch];
}
