import { LoginContext } from "@/pages/LoginPage";
import { useContext } from "react";
import handleChange from "../utils/handleChange";
import LoginFormInput from "./LoginFormInput";

/**
 * This component renders an email input field for the login form.
 * It uses the LoginContext to manage the form state.
 *
 * @returns {JSX.Element} - The JSX representation of the email input field.
 */
export default function InputEmail() {
  /**
   * The state and dispatch function from the LoginContext.
   * @type {Array}
   */
  const [state, dispatch] = useContext(LoginContext);

  return (
    <section>
      <label htmlFor="email" className="block mb-2 text-sm">
        Email address
      </label>
      <LoginFormInput
        type="email"
        name="email"
        id="email"
        value={state.email}
        onChange={(event) => handleChange(event, dispatch, "UPDATE_EMAIL")}
        autoComplete="username"
        placeholder="leroy@jenkins.com"
      />
    </section>
  );
}
