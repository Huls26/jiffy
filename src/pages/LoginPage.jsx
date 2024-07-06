import LoginForm from "@/features/LoginForm";
import SignInTextSection from "@/features/LoginForm/sections/SignInTextSection";

import { createContext, useReducer } from "react";

const LoginContext = createContext();

export { LoginContext };

/**
 * This is the main component for the login page.
 * It renders a form for users to sign in.
 *
 * @returns {JSX.Element} - The JSX element for the login page.
 */ export default function LoginPage() {
  const InitialState = {
    email: "",
    password: "",
  };
  function reducerMethod(state, action) {
    switch (action.type) {
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
      case "UPDATE_PASSWORD":
        return { ...state, password: action.payload };
      default:
        throw new Error("Invalid action type", action.type, action.payload);
    }
  }

  const [state, dispatch] = useReducer(reducerMethod, InitialState);

  return (
    <main
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      <LoginContext.Provider value={[state, dispatch]}>
        <SignInTextSection />
        <LoginForm />
      </LoginContext.Provider>
    </main>
  );
}
