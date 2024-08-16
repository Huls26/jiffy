import ErrorMessage from "@/components/ErrorMessage";
import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

export default function SignUpFormSection() {
  console.log("display error when password and confirm password is not match");
  function handleSignUp(event) {
    event.preventDefault();

    // Handle form submission
  }
  return (
    <form onSubmit={handleSignUp} className="space-y-12">
      <ErrorMessage isError={true} message="Something went wrong Try again" />
      <SignUpInputSection />
      <SignUpBtnSection />
    </form>
  );
}
