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
  // check if the email and password were provided
  const isValidInput = !(email && password);

  return (
    <section className="space-y-2">
      <SubmitFullBtn text="Sign in" isInvalid={isValidInput} />
      <AuthPrompt
        message="Don't have an account yet?"
        url="/signup"
        linkText="Sign up."
      />
    </section>
  );
}
