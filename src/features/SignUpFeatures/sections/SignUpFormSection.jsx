import { auth } from "@/lib/fb";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {} from "firebase/firestore";
import useSignUpState from "../hooks/useSignUpState";
import { checkUsername } from "../utils/checkUsername";
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
  const { dispatch, email, username, password, confirmPassword } =
    useSignUpState();

  /**
   * Handles the sign-up form submission.
   * Validates the password, checks for existing usernames, and dispatches error messages if necessary.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  async function handleSignUp(event) {
    event.preventDefault();

    function createUser(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;

          // Handle specific errors based on errorCode
          switch (errorCode) {
            case "auth/email-already-in-use":
              errorMessage = "Email is already taken";
              break;
            case "auth/invalid-email":
              errorMessage = "The email address is not valid.";
              break;
            case "auth/operation-not-allowed":
              errorMessage = "Email/password accounts are not enabled.";
              break;
            case "auth/weak-password":
              errorMessage = "The password is too weak.";
              break;
            default:
              console.error("An unknown error occurred:", errorMessage);
          }

          console.error(errorMessage);
          dispatch({
            type: "UPDATE_ERROR",
            isError: true,
            message: errorMessage,
          });
        });
      // .finally((u) => {
      //   const auth = getAuth();
      //   const user = auth.currentUser;

      //   console.log(user);
      //   console.log(u);
      // });
    }

    if (password !== confirmPassword) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Check Password",
      });
    } else if (password.length < 6 || confirmPassword.length < 6) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Password must be at least 6 characters",
      });
    } else if (await checkUsername(username)) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Username is already taken",
      });
    } else {
      createUser(email, password);
      dispatch({
        type: "UPDATE_ERROR",
        isError: false,
        message: "",
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
