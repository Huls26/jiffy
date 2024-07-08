import { LoginContext } from "@/pages/LoginPage";
import { useContext } from "react";
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

  /**
   * Handles the change event of the email input field.
   * Updates the email state in the LoginContext.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
   */
  function handleChange(event) {
    dispatch({
      type: "UPDATE_EMAIL",
      payload: `${event.target.value}`,
    });
  }

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
        onChange={handleChange}
        autoComplete="username"
        placeholder="leroy@jenkins.com"
      />
    </section>
  );
}
