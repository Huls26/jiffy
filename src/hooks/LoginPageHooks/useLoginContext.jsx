import { useReducer } from "react";
import reducerMethod, { INITIAL_STATE } from "./LoginPageContextReducer";

export default function useLoginContext() {
  const [state, dispatch] = useReducer(reducerMethod, INITIAL_STATE);

  return [state, dispatch];
}
