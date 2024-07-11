import { LoginContext } from "@/pages/LoginPage";
import { useContext } from "react";
import handleChange from "../utils/handleChange";

/**
 * This function renders an input field for password input in a login form.
 * It uses React's useContext hook to access the login context and updates the password state.
 *
 * @returns {JSX.Element} - A React input element for password input.
 */
export default function InputPassword() {
  const [state, dispatch] = useContext(LoginContext);

  return (
    <input
      type="password"
      name="password"
      id="password"
      value={state.password}
      onChange={(event) => handleChange(event, dispatch, "UPDATE_PASSWORD")}
      autoComplete="current-password"
      placeholder="*****"
      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
    />
  );
}
