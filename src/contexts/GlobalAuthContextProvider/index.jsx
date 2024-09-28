import useAuthListener from '@/hooks/useAuthListener';
import { createContext } from 'react';

const GlobalAuthContext = createContext();
export { GlobalAuthContext };

export default function GlobalAuthContextProvider({ children }) {
  const globalContextState = useAuthListener();

  return (
    <GlobalAuthContext.Provider value={globalContextState}>
      {children}
    </GlobalAuthContext.Provider>
  )
}
