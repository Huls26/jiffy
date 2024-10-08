import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import LoginFeatures from "@/features/LoginFeatures";
import reducerMethod, {
  INITIAL_STATE,
} from "@/features/LoginForm/context/LoginPageContextReducer";
import usePageTitle from "@/hooks/usePageTitle";

/**
 * This is the main component for the login page.
 * It renders a form for users to sign in.
 *
 * @function LoginPage
 * @returns {JSX.Element} - The JSX element for the login page.
 */
export default function LoginPage() {
  /**
   * Sets the page title to "Login".
   */
  usePageTitle("Login");

  return (
    <LoginSignUpContainer>
      <ReducerContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <LoginFeatures />
      </ReducerContextProvider>
    </LoginSignUpContainer>
  );
}
