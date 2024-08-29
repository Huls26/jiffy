import LoadingSkeleton from "@/components/LoadingSkeleton";
import InputSkeleton from "@/components/LoadingSkeleton/components/InputSkeleton";
import SubmitBtnSkeleton from "@/components/LoadingSkeleton/components/SubmitBtnSkeleton";
import useSignUpState from "../hooks/useSignUpState";
import createNewUser from "../utils/createNewUser";
import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

/**
 * The SignUpFormSection component is responsible for handling the sign-up form.
 * It includes input fields for username, password, and confirm password, as well as a submit button.
 * The component also checks for existing usernames in the database and validates the password.
 *
 * @returns {JSX.Element} - The SignUpFormSection component.
 */
export default function SignUpFormSection() {
  const signUpState = useSignUpState();
  const { dispatch, isLoading } = signUpState;

  /**
   * Handles the sign-up form submission.
   * Validates the password, checks for existing usernames, and dispatches error messages if necessary.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  async function handleSignUp(event) {
    event.preventDefault();

    dispatch({ type: "UPDATE_ACCOUNTCREATED", accountCreated: false });
    dispatch({
      type: "UPDATE_LOADING",
      isLoading: true,
    });
    const setDispatchOptions = await createNewUser(signUpState);
    dispatch({ ...setDispatchOptions });
    dispatch({ type: "UPDATE_LOADING", isLoading: false });
  }

  if (isLoading) {
    return (
      <LoadingSkeleton>
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <SubmitBtnSkeleton />
      </LoadingSkeleton>
    ); // Show a loading component while waiting for the API response.
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-12">
      <SignUpInputSection />
      <SignUpBtnSection />
    </form>
  );
}
