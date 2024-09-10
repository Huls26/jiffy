import useHandleSubmitAndError from "./hooks/useHandleSubmitAndError";
import ButtonSection from "./sections/ButtonSection";
import InputSection from "./sections/InputSection";

import { reducerContext } from "@/contexts/ReducerContextProvider";
import { lazy } from "react";

const ErrorMessage = lazy(() => import("@/components/ErrorMessage"));
const LoginFormLoadingSkeleton = lazy(
  () => import("./components/LoginFormLoadingSkeleton"),
);

import { useContext } from "react";

/**
 * The main component for handling user login.
 *
 * @returns {JSX.Element} - The JSX element for the login form.
 */
export default function LoginForm() {
  // Deconstruct the handleSubmit and isErrorAuth from the useHandleSubmitAndError hook
  const { handleSubmit, isErrorAuth } = useHandleSubmitAndError();
  const [loginState] = useContext(reducerContext);
  const { isLoading } = loginState;

  if (isLoading) {
    return <LoginFormLoadingSkeleton />;
  }

  return (
    // Render a form with the onSubmit event handler and space-y-12 class
    <form onSubmit={handleSubmit} className="space-y-12">
      <ErrorMessage
        isError={isErrorAuth}
        message="Try again check email and password"
      />
      <InputSection />
      <ButtonSection />
    </form>
  );
}
