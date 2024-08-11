import { reducerContext } from "@/contexts/ReducerContextProvider";
import { auth } from "@/lib/fb";

import { signInWithEmailAndPassword } from "firebase/auth";
import ErrorMessage from "./components/ErrorMessage";
import ButtonSection from "./sections/ButtonSection";
import InputSection from "./sections/InputSection";

import { useContext, useState } from "react";

/**
​ * The main component for handling user login.
​ *
​ * @returns {JSX.Element} - The JSX element for the login form.
​ */
export default function index() {
  const [loginState] = useContext(reducerContext);
  const { email, password } = loginState;
  const [errorState, setErrorState] = useState(false);

  /**
​   * Handles the form submission by preventing the default action and calling the signIn function.
​   *
​   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
​   */
  function handleSubmit(event) {
    event.preventDefault();

    async function signIn(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        setErrorState(false);
      } catch (error) {
        setErrorState(true);
        console.error("Error signing in:", error);
      }
    }

    signIn(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <ErrorMessage isError={errorState} />
      <InputSection />
      <ButtonSection />
    </form>
  );
}
