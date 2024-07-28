import FormInput from "@/components/FormInput";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import handleChange from "@/utils/handleChange";

import { useContext } from "react";

/**
 * This function renders an input field for password input in a login form.
 * It uses React's useContext hook to access the login context and updates the password state.
 *
 * @returns {JSX.Element} - A React input element for password input.
 */
export default function InputPassword() {
  /**
   * The state and dispatch function from the LoginContext.
   * @type {Array}
   */
  const [state, dispatch] = useContext(reducerContext);

  return (
    <FormInput
      type="password"
      name="password"
      id="password"
      value={state.password}
      onChange={(event) => handleChange(event, dispatch, "UPDATE_PASSWORD")}
      autoComplete="current-password"
      placeholder="********"
    />
  );
}
