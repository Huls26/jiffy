import ErrorMessage from "@/components/ErrorMessage";
import InputLabelContainer from "@/components/componentContainers/InputLabelContainer";
import useSignUpState from "../hooks/useSignUpState";

export default function SignUpInputSection() {
  const { isError, errorMessage } = useSignUpState();

  // Render the sign-up form inputs and error message based on the state
  return (
    <section className="space-y-4">
      <ErrorMessage isError={isError} message={errorMessage} />
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
        placeholder="Kiki Aquino"
      />
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
