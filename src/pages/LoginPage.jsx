import LoginForm from "@/features/LoginForm";
import SignInTextSection from "@/features/LoginForm/sections/SignInTextSection";

import { createContext } from "react";

const LoginContext = createContext();

export { LoginContext };

/**
 * This is the main component for the login page.
 * It renders a form for users to sign in.
 *
 * @returns {JSX.Element} - The JSX element for the login page.
 */ export default function LoginPage() {
  return (
    <main
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      <LoginContext.Provider value={{ email: "", password: "" }}>
        <SignInTextSection />
        <LoginForm />
      </LoginContext.Provider>
    </main>
  );
}
