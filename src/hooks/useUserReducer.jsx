import { useReducer, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '@/api/FB';
import reducerMethod, { INITIAL_STATE } from './contextReducer';

// ready for clean up
export default function useUserReducer() {
  const [detailsState, dispatch] = useReducer(reducerMethod, INITIAL_STATE);
  const auth = getAuth();
  const { userId } = detailsState;

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
      } else {
        dispatch({
          type: 'LOGOUT_USER',
        });
      }
    });
  }, [auth]);

  useEffect(() => {
    let unsub;

    if (userId) {
      unsub = onSnapshot(doc(db, 'users', userId), (docSnap) => {
        dispatch({
          type: 'SET_USERDATA',
          userData: docSnap.data(),
        });
      });
    }

    return unsub;
  }, [userId]);

  return [detailsState, dispatch];
}
