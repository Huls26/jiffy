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
    <LoginSignUpContainer
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
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
