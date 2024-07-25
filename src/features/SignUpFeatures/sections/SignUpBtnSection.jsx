import AuthPrompt from "@/components/AuthPrompt";
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";

/**
 * This function renders a section containing a submit button and an authentication prompt.
 * The submit button is a custom component that displays a full-width button with the text "Create Account".
 * The authentication prompt is another custom component that displays a message and a link to a login page.
 *
 * @returns {JSX.Element} - A section element containing the submit button and the authentication prompt.
 */
export default function SignUpBtnSection() {
  return (
    <section className="space-y-2">
      <SubmitFullBtn text="Create Account" />
      <AuthPrompt
        message="Already have an account?"
        url="/login"
        linkText="Login"
      />
    </section>
  );
}
