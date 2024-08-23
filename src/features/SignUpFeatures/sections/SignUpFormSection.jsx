import useSignUpState from "../hooks/useSignUpState";
import { checkUsername } from "../utils/checkUsername";
import createUser from "../utils/createUser";
import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

/**
 * The SignUpFormSection component is responsible for handling the sign-up form.
 * It includes input fields for username, password, and confirm password, as well as a submit button.
 * The component also checks for existing usernames in the database and validates the password.
 *
 * @returns {JSX.Element} - The SignUpFormSection component.
 */
export default function SignUpFormSection() {
  const { dispatch, email, username, password, confirmPassword } =
    useSignUpState();

  /**
   * Handles the sign-up form submission.
   * Validates the password, checks for existing usernames, and dispatches error messages if necessary.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  async function handleSignUp(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Check Password",
      });
    } else if (password.length < 6 || confirmPassword.length < 6) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Password must be at least 6 characters",
      });
    } else if (await checkUsername(username)) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Username is already taken",
      });
    } else {
      createUser(email, password, dispatch);
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-12">
      <SignUpInputSection />
      <SignUpBtnSection />
    </form>
  );
}
