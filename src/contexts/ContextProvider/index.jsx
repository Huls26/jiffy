import { createContext } from "react";

const Context = createContext();
export { Context };

export default function ContextProvider({ children, value }) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
