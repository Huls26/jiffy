import ErrorMessage from "./components/ErrorMessage";
import useHandleSubmitAndError from "./hooks/useHandleSubmitAndError";
import ButtonSection from "./sections/ButtonSection";
import InputSection from "./sections/InputSection";

/**
 * The main component for handling user login.
 *
 * @returns {JSX.Element} - The JSX element for the login form.
 */
export default function LoginForm() {
  // Deconstruct the handleSubmit and isErrorAuth from the useHandleSubmitAndError hook
  const { handleSubmit, isErrorAuth } = useHandleSubmitAndError();

  return (
    // Render a form with the onSubmit event handler and space-y-12 class
    <form onSubmit={handleSubmit} className="space-y-12">
      <ErrorMessage isError={isErrorAuth} />
      <InputSection />
      <ButtonSection />
    </form>
  );
}
