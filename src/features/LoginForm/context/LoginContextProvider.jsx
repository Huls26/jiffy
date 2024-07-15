import useLoginContext from "@/hooks/LoginPageHooks/useLoginContext";
import { createContext } from "react";

/**
 * A React context object for managing login state and dispatching actions.
 *
 * @constant loginContext
 * @type {React.Context<any>}
 * @default
 * @example
 * import { loginContext } from "@/contexts/LoginContext";
 *
 * function LoginComponent() {
 *   const [state, dispatch] = React.useContext(loginContext);
 *   // ...
 * }
 */
const loginContext = createContext();
export { loginContext };

/**
 * A React context provider component for managing login state and dispatching actions.
 *
 * @function LoginContextProvider
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 * @returns {React.ReactElement} - The React context provider component.
 */
export default function LoginContextProvider({ children }) {
  const [state, dispatch] = useLoginContext();

  return (
    <loginContext.Provider value={[state, dispatch]}>
      {children}
    </loginContext.Provider>
  );
}
