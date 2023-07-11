import { useReducer, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import reducerMethod, { INITIAL_STATE } from './contextReducer';

export default function useUserReducer() {
  const [detailsState, dispatch] = useReducer(reducerMethod, INITIAL_STATE);
  const auth = getAuth();

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
        // ...
      }
    });
  }, [auth]);

  return [detailsState, dispatch];
}
