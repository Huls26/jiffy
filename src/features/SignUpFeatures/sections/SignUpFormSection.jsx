import { reducerContext } from "@/contexts/ReducerContextProvider";
import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

import { useContext } from "react";

export default function SignUpFormSection() {
  const [signUpState, dispatch] = useContext(reducerContext);
  const { password, confirmPassword } = signUpState;

  function handleSignUp(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Check Password",
      });
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-12">
      <SignUpInputSection />
      <SignUpBtnSection />
    </form>
  );
}
