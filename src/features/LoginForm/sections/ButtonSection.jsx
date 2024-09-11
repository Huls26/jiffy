import AuthPrompt from "@/components/AuthPrompt";
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

/**
 * A functional component that renders a section with a sign-in button and an authentication prompt.
 *
 * @function ButtonSection
 * @returns {JSX.Element} - A JSX element representing the button section.
 */
export default function ButtonSection() {
  const [loginInputState] = useContext(reducerContext);
  const { email, password } = loginInputState;

  // Check if either email or password is missing
  const isInvalidInput = !email || !password;

  return (
    <section className="space-y-2">
      <SubmitFullBtn text="Sign in" isInvalid={isInvalidInput} />
      <AuthPrompt
        message="Don't have an account yet?"
        url="/signup"
        linkText="Sign up."
      />
    </section>
  );
}
