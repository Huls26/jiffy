import PropTypes from "prop-types";
import { useReducer } from "react";
import ContextProvider, { Context } from "../ContextProvider";

/**
 * A React context object for managing state and dispatching actions.
 *
 * @constant reducerContext
 * @type {React.Context<any>}
 * @default
 * @example
 * import { reducerContext } from "@/contexts/ReducerContextProvider";
 *
 * function LoginComponent() {
 *   const [state, dispatch] = React.useContext(loginContext);
 *   // ...
 * }
 */
const reducerContext = Context;
export { reducerContext };

/**
 * A React context provider component for managing state and dispatching actions.
 *
 * @function ReducerContextProvider
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 * @returns {React.ReactElement} - The React context provider component.
 *
 *  @example
 * import { ReducerContextProvider } from "@/contexts/ReducerContextProvider";
 *
 * function App() {
 *   return (
 *     <ReducerContextProvider reducerMethod={reducer} INITIAL_STATE={initialState}>
 *       <YourAppComponents />
 *     </ReducerContextProvider>
 *   );
 * }
 */
export default function ReducerContextProvider({
  reducerMethod,
  INITIAL_STATE,
  children,
}) {
  const [state, dispatch] = useReducer(reducerMethod, INITIAL_STATE);
  // const initialState = useMemo(() => [state, dispatch], [state]);

  return (
    // I could use ContextProvider here, instead of reducerContextProvider
    // but right this is probably fine for now
    <ContextProvider value={[state, dispatch]}>{children}</ContextProvider>
  );
}

ReducerContextProvider.propTypes = {
  reducerMethod: PropTypes.func.isRequired,
  INITIAL_STATE: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
