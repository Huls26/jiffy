import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

export default function useSignUpState() {
  const [signUpState, dispatch] = useContext(reducerContext);
  const {
    email,
    username,
    password,
    confirmPassword,
    isErrorAuth,
    errorMessage,
  } = signUpState;

  return {
    dispatch,
    email,
    username,
    password,
    confirmPassword,
    isErrorAuth,
    errorMessage,
  };
}
