import AuthPrompt from "@/components/AuthPrompt";
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";

/**
 * A functional component that renders a section with a sign-in button and an authentication prompt.
 *
 * @function ButtonSection
 * @returns {JSX.Element} - A JSX element representing the button section.
 */
export default function ButtonSection() {
  return (
    <section className="space-y-2">
      <SubmitFullBtn text="Sign in" />
      <AuthPrompt
        message="Don't have an account yet?"
        url="/signup"
        linkText="Sign up."
      />
    </section>
  );
}
