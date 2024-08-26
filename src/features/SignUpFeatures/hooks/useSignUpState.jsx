import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

/**
 * A custom React hook that provides access to the sign-up state and dispatch function from the ReducerContextProvider.
 * This hook is used to manage the sign-up process and handle user input.
 *
 * @returns {Object} An object containing the sign-up state and dispatch function.
 * @property {Function} dispatch - The dispatch function for updating the
 * @property {Object} signUpState - The state object containing the sign-up data.
 * @property {string} signUpState.email - The email entered by the user.
 * @property {string} signUpState.username - The username entered by the user.
 * @property {string} signUpState.fullName - The full name entered by the user.
 * @property {string} signUpState.password - The password entered by the user.
 * @property {string} signUpState.confirmPassword - The confirmed password entered by the user.
 * @property {boolean} signUpState.isErrorAuth - A flag indicating whether there is an authentication error.
 * @property {string} signUpState.errorMessage - The error message, if any, related to authentication.
 * @property {boolean} signUpState.isLoading - A flag indicating whether the sign-up process is currently in progress.
 */
export default function useSignUpState() {
  const [signUpState, dispatch] = useContext(reducerContext);

  return { ...signUpState, dispatch };
}
