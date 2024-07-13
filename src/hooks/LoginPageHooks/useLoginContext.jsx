import { useReducer } from "react";
import reducerMethod, { INITIAL_STATE } from "./LoginPageContextReducer"; /**
 * A custom React hook that manages the state and dispatch for the login context.
 * This hook uses the `useReducer` hook from React to manage the state and dispatch actions.
 *
 * @returns {Array} An array containing the current state and the dispatch function.
 * @returns {Object} state - The current state of the login context.
 * @returns {Function} dispatch - A function to dispatch actions to update the state.
 *
 * @example
 * import React from 'react';
 * import useLoginContext from './useLoginContext';
 *
 * function LoginForm() {
 *   const [state, dispatch] = useLoginContext();
 *
 *   const handleSubmit = (event) => {
 *     event.preventDefault();
 *     // Perform login logic
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <input
 *          type='email'
 *          name='email'
 *          id='email'
 *          placeholder='email@example'
 *          onChange={event => dispatch(
 *                      {type: event, payload: event.target.value}
 *                    )}
 *          value={state.email}
 *        />
 *     </form>
 *   );
 * }
 */
export default function useLoginContext() {
  const [state, dispatch] = useReducer(reducerMethod, INITIAL_STATE);

  return [state, dispatch];
}
