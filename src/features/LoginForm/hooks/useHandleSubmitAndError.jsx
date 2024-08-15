import { reducerContext } from "@/contexts/ReducerContextProvider";
import loginUser from "../utils/loginUser";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

/**
 * A custom React hook that handles the login form submission and error handling.
 * It uses the `reducerContext` to manage the login state and the `useNavigate` hook from `react-router-dom` to navigate to the home page.
 *
 * @returns {Object} An object containing the `handleSubmit` function and the `isErrorAuth` state.
 */
export default function useHandleSubmitAndError() {
  const [loginState, dispatch] = useContext(reducerContext);
  const { email, password, isErrorAuth } = loginState;
  const navigate = useNavigate();

  /**
   * Handles the form submission by preventing the default form behavior,
   * calling the `loginUser` function with the email, password, dispatch, and navigate parameters,
   * and updating the login state based on the response.
   *
   * @param {Event} event - The form submission event.
   */
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "UPDATE_ISLOADING", payload: true });
    loginUser(email, password, dispatch, navigate)
      .then((res) => {
        if (res) {
          dispatch({ type: "UPDATE_VALIDAUTH" });
          navigate("/");
        }
      })
      .catch(() => {
        console.error(
          "Login failed. Please check your credentials and try again.",
        );
        dispatch({ type: "UPDATE_INVALIDAUTH" });
      })
      .finally(() => {
        dispatch({ type: "UPDATE_ISLOADING", payload: false });
      });
  }

  return { handleSubmit, isErrorAuth };
}
