import useAuthListener from '@/hooks/useAuthListener';
import { createContext } from 'react';

const GlobalAuthContext = createContext();
export { GlobalAuthContext };

/**
 * A React context provider component that manages authentication state.
 * It uses the custom hook `useAuthListener` to fetch and update the authentication state.
 *
 * @function GlobalAuthContextProvider
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {React.ReactElement} - The wrapped child components with the authentication context.
 */
export default function GlobalAuthContextProvider({ children }) {
  // Fetch and update the authentication state using the custom hook
  const globalContextState = useAuthListener();

  return (
    // Provide the authentication state to the child components
    <GlobalAuthContext.Provider value={globalContextState}>
      {children}
    </GlobalAuthContext.Provider>
  )
}
