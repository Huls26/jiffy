import { createContext } from "react";
import { useReducer } from "react";

const GlobalContext = createContext();
export { GlobalContext };

export default function GlobalContextProvider({ reducerMethod,
  INITIAL_STATE,
  children }) {
  const [state, dispatch] = useReducer(reducerMethod, INITIAL_STATE);

  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
}
