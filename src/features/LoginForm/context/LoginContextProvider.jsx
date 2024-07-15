import useLoginContext from "@/hooks/LoginPageHooks/useLoginContext";
import { createContext } from "react";

const loginContext = createContext();
export { loginContext };

export default function LoginContextProvider({ children }) {
  const [state, dispatch] = useLoginContext();

  return (
    <loginContext.Provider value={[state, dispatch]}>
      {children}
    </loginContext.Provider>
  );
}
