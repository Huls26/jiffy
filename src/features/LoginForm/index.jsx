import { reducerContext } from "@/contexts/ReducerContextProvider";
import ErrorMessage from "./components/ErrorMessage";
import ButtonSection from "./sections/ButtonSection";
import InputSection from "./sections/InputSection";
import loginUser from "./utils/loginUser";

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

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(email, password, dispatch, navigate)
      .then((res) => {
        if (res) {
          dispatch({ type: "UPDATE_VALIDAUTH" });
          navigate("/");
        }
      })
      .catch(() => {
        console.error(
          "Login failed. Please check your credentials and try again.",
        );
        dispatch({ type: "UPDATE_INVALIDAUTH" });
      });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <ErrorMessage isError={isErrorAuth} />
      <InputSection />
      <ButtonSection />
    </form>
  );
}
