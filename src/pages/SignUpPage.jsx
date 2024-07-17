import LoginSignUpContainer from "@/components/componentContainers/LoginSignUpContainer";
import LoginForm from "@/features/LoginForm";
import LoginContextProvider from "../features/LoginForm/context/LoginContextProvider";

export default function SignUpPage() {
  return (
    <LoginSignUpContainer
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      <LoginContextProvider>
        <h1>sign up page</h1>
        <LoginForm />
      </LoginContextProvider>
    </LoginSignUpContainer>
  );
}
