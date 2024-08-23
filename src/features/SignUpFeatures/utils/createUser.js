import { auth } from "@/lib/fb";
import { createUserWithEmailAndPassword } from "firebase/auth";

/**
 * This function creates a new user in Firebase Authentication using the provided email and password.
 * It also handles specific error cases and dispatches an action to update the error state.
 *
 * @param {string} email - The email address of the new user.
 * @param {string} password - The password for the new user.
 * @param {function} dispatch - The Redux dispatch function to update the error state.
 *
 * @returns {Promise<firebase.User|null>} - A Promise that resolves with the newly created user if successful,
 * or rejects with an error object if an error occurs.
 */
export default async function createUser(email, password, dispatch) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      dispatch({
        type: "UPDATE_ERROR",
        isError: false,
        message: "",
      });

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
        case "auth/missing-email":
          errorMessage = "Please enter your email address.";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/password accounts are not enabled.";
          break;
        case "auth/weak-password":
          errorMessage = "The password is too weak.";
          break;
        default:
          // biome-ignore lint/nursery/noConsole: <explanation>
          console.error("An unknown error occurred:", errorMessage);
      }

      // Optional: Log a more concise error message
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: errorMessage,
      });
    });
}
