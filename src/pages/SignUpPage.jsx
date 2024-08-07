import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import reducerMethod, {
  INITIAL_STATE,
} from "@/contexts/SignUpPageContextReducer";
import SignUpFeatures from "@/features/SignUpFeatures";
import usePageTitle from "@/hooks/usePageTitle";

/**
 * This function represents the SignUpPage component, which is a part of the application's user registration process.
 * It renders the SignUpFeatures component within a LoginSignUpContainer, and provides the necessary context for the SignUp process.
 *
 * @function SignUpPage
 * @returns {JSX.Element} - The SignUpPage component with its child components.
 */
export default function SignUpPage() {
  /**
   * Sets the page title to "Signup".
   */
  usePageTitle("SignUp");

  return (
    <LoginSignUpContainer>
      <ReducerContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <SignUpFeatures />
      </ReducerContextProvider>
    </LoginSignUpContainer>
  );
}
