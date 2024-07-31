import ModalHeaderText from "@/components/ModalHeaderText";
import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import LoginForm from "@/features/LoginForm";
import reducerMethod, {
  INITIAL_STATE,
} from "@/features/LoginForm/context/LoginPageContextReducer";

/**
 * This is the main component for the login page.
 * It renders a form for users to sign in.
 *
 * @returns {JSX.Element} - The JSX element for the login page.
 */ export default function LoginPage() {
  return (
    <LoginSignUpContainer>
      <ReducerContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <ModalHeaderText
          title={"Sign in"}
          body={"Sign in to access your account"}
        />
        <LoginForm />
      </ReducerContextProvider>
    </LoginSignUpContainer>
  );
}
