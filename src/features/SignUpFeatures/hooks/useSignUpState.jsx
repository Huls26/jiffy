import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

/**
 * A custom React hook that provides access to the sign-up state and dispatch function from the ReducerContextProvider.
 *confirmed password entered by the user.
 * @property {boolean} isErrorAuth - A flag indicating whether there is an authentication error.
 * @property {string} errorMessage - The error message, if any, related to authentication.
 * @returns {Object} An object containing the sign-up state and dispatch function.
 * @property {Function} dispatch - The dispatch function for updating the sign-up state.
 * @property {string} email - The email entered by the user.
 * @property {string} username - The username entered by the user.
 * @property {string} password - The password entered by the user.
 * @property {string} confirmPassword - The
 */
export default function useSignUpState() {
  const [signUpState, dispatch] = useContext(reducerContext);
  const {
    email,
    username,
    password,
    confirmPassword,
    isErrorAuth,
    errorMessage,
  } = signUpState;

  return {
    dispatch,
    email,
    username,
    password,
    confirmPassword,
    isErrorAuth,
    errorMessage,
  };
}
