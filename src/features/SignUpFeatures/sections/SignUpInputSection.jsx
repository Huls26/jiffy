import ErrorMessage from "@/components/ErrorMessage";
import FormInputField from "@/components/componentContainers/FormInputField";
import ConfirmationMessage from "../components/ConfirmationMessage";
import useSignUpState from "../hooks/useSignUpState";

/**
 * This function renders the sign-up form inputs and error message based on the state.
 * It uses the `ErrorMessage` and `InputLabelContainer` components to display the necessary UI elements.
 *
 * @returns {JSX.Element} - The JSX element representing the sign-up input section.
 */
export default function SignUpInputSection() {
  const { accountCreated, isErrorAuth, errorMessage } = useSignUpState();

  // Render the sign-up form inputs and error message based on the state
  return (
    <section className="space-y-4">
      <ConfirmationMessage
        message="Account Created Successfully"
        accountCreated={accountCreated}
      />
      <ErrorMessage isError={isErrorAuth} message={errorMessage} />
      <FormInputField
        ariaLabel="Enter email address"
        label="Email address"
        type="email"
        name="email"
        id="email"
        dispatchType="UPDATE_EMAIL"
        autoComplete="username"
        placeholder="aquino@mail.com"
      />
      <FormInputField
        ariaLabel="Enter username"
        label="Username"
        type="text"
        name="username"
        id="username"
        dispatchType="UPDATE_USERNAME"
        autoComplete="username"
        placeholder="KikiNo"
      />
      <FormInputField
        ariaLabel="Enter full name"
        label="Full Name"
        type="text"
        name="fullName"
        id="fullName"
        dispatchType="UPDATE_USERFULLNAME"
        autoComplete="name"
        placeholder="Kiki Aquino"
      />
      <FormInputField
        ariaLabel="Enter password"
        label="Password"
        type="password"
        name="password"
        id="password"
        dispatchType="UPDATE_PASSWORD"
        autoComplete="new-password"
        placeholder="********"
      />
      <FormInputField
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
