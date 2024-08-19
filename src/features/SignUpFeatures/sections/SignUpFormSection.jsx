import useSignUpState from "../hooks/useSignUpState";
import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

export default function SignUpFormSection() {
  const { dispatch, password, confirmPassword } = useSignUpState();

  function handleSignUp(event) {
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
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-12">
      <SignUpInputSection />
      <SignUpBtnSection />
    </form>
  );
}
