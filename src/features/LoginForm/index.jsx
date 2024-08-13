import { reducerContext } from "@/contexts/ReducerContextProvider";
import { auth } from "@/lib/fb";

import { signInWithEmailAndPassword } from "firebase/auth";
import ErrorMessage from "./components/ErrorMessage";
import ButtonSection from "./sections/ButtonSection";
import InputSection from "./sections/InputSection";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

/**
​ * The main component for handling user login.
​ *
​ * @returns {JSX.Element} - The JSX element for the login form.
​ */
export default function LoginForm() {
  const [loginState, dispatch] = useContext(reducerContext);
  const { email, password, isErrorAuth } = loginState;
  const navigate = useNavigate();

  console.log("to rewrite login");
  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Signed in
      dispatch({ type: "UPDATE_VALIDAUTH" });
      navigate("/");
      // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    } catch (error) {
      dispatch({ type: "UPDATE_INVALIDAUTH" });
    }
  }

  /**
​   * Handles the form submission by preventing the default action and calling the signIn function.
​   *
​   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
​   */
  function handleSubmit(event) {
    event.preventDefault();
    signIn(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <ErrorMessage isError={isErrorAuth} />
      <InputSection />
      <ButtonSection />
    </form>
  );
}
