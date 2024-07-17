import { useContext } from "react";

import FormInput from "@/components/FormInput";
import { loginContext } from "../context/LoginContextProvider";
import handleChange from "../utils/handleChange";

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
  const [state, dispatch] = useContext(loginContext);

  return (
    <section>
      <label htmlFor="email" className="block mb-2 text-sm">
        Email address
      </label>
      <FormInput
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
