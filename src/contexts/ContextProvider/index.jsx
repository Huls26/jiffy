import { createContext } from "react";

/**
 * A React context object for managing value.
 *
 * @constant Context
 * @type {React.Context<any>}
 * @default
 * @example
 * import { Context } from "@/contexts/ContextProvider";
 *
 * function LoginComponent() {
 *   const value = React.useContext(Context);
 *   // ...
 * }
 */
const Context = createContext();
export { Context };

/**
 * A React context provider component that wraps its children with a Context.Provider.
 * It logs a message to the console indicating that documentation and test cases should be written.
 *
 * @function ContextProvider
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the Context.Provider.
 * @param {any} props.value - The value to be passed to the Context.Provider.
 * @returns {React.ReactElement} - The wrapped child components with the Context.Provider.
 */
export default function ContextProvider({ children, value }) {
  console.log("write documentation and test cases");
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
