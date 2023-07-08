import { useEffect, createContext, useReducer } from 'react';
import {
  getAuth, onAuthStateChanged,
  // signOut,
} from 'firebase/auth';

// reminder: set firebase rules

import Routes from '@routes';
import reducerMethod, { INITIAL_STATE } from '@hooks/contextReducer';

const dataContext = createContext();
const ContextProvider = dataContext.Provider;

function App() {
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
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth]);
  // signOut(auth).then(() => {
  //   console.log('signOUt user');
  // }).catch((error) => {
  //   console.log(error.message);
  // });

  return (
    <ContextProvider value={[detailsState, dispatch]}>
      <Routes />
    </ContextProvider>
  );
}

export default App;
export { dataContext };
