import { db } from "@/lib/fb";
import { collection, getDocs, query, where } from "firebase/firestore";
import useSignUpState from "../hooks/useSignUpState";
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
  const { dispatch, username, password, confirmPassword } = useSignUpState();

  /**
   * Asynchronously checks if the given username already exists in the database.
   *
   * @param {string} username - The username to check.
   * @returns {Promise<number>} - A promise that resolves to the number of documents found with the given username.
   */
  async function checkUserName(username) {
    // Check if the username already exists in the database.
    const usersRef = collection(db, "users");
    const userDoc = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(userDoc);

    // const q = querySnapshot.docs.map((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   return doc.data();
    // });

    return querySnapshot.docs.length;
  }

  /**
   * Handles the sign-up form submission.
   * Validates the password, checks for existing usernames, and dispatches error messages if necessary.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  async function handleSignUp(event) {
    event.preventDefault();

    console.log(await checkUserName(username));
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
    } else if ((await checkUserName(username)) > 0) {
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Username is already taken",
      });
    } else {
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
