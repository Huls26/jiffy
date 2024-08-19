import ErrorMessage from "@/components/ErrorMessage";
import InputLabelContainer from "@/components/componentContainers/InputLabelContainer";
import useSignUpState from "../hooks/useSignUpState";

/**
 * This function renders the sign-up form inputs and error message based on the state.
 * It uses the `ErrorMessage` and `InputLabelContainer` components to display the necessary UI elements.
 *
 * @returns {JSX.Element} - The JSX element representing the sign-up input section.
 */
export default function SignUpInputSection() {
  const { isErrorAuth, errorMessage } = useSignUpState();

  // Render the sign-up form inputs and error message based on the state
  return (
    <section className="space-y-4">
      <ErrorMessage isError={isErrorAuth} message={errorMessage} />
      <InputLabelContainer
        ariaLabel="Enter email address"
        label="Email address"
        type="email"
        name="email"
        id="email"
        dispatchType="UPDATE_EMAIL"
        autoComplete="username"
        placeholder="aquino@mail.com"
      />
      <InputLabelContainer
        ariaLabel="Enter username"
        label="Username"
        type="text"
        name="username"
        id="username"
        dispatchType="UPDATE_USERNAME"
        autoComplete="username"
        placeholder="KikiNo"
      />
      {/* to-be-added feature */}
      {/* <InputLabelContainer
        ariaLabel="Enter first name"
        label="First Name"
        type="text"
        name="firstname"
        id="firstname"
        dispatchType="UPDATE_USERNAME"
        autoComplete="firstname"
        placeholder="Kiki"
      /> */}
      <InputLabelContainer
        ariaLabel="Enter password"
        label="Password"
        type="password"
        name="password"
        id="password"
        dispatchType="UPDATE_PASSWORD"
        autoComplete="new-password"
        placeholder="********"
      />
      <InputLabelContainer
        ariaLabel="confirm password"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        dispatchType="UPDATE_CONFIRM_PASSWORD"
        autoComplete="new-password"
        placeholder="********"
      />
    </section>
  );
}
