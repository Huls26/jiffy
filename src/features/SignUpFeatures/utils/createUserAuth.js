import { auth } from "@/lib/fb";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

/**
 * This function creates a new user in Firebase Authentication using the provided email and password.
 * It also handles specific error cases and dispatches an action to update the error state.
 *
 * @param {string} email - The email address of the new user.
 * @param {string} username - The username for the new user.
 * @param {string} password - The password for the new user.
 *
 * @returns {Promise<Object|null>} - A Promise that resolves with an object containing the newly created user
 *                                   if successful, or an error object if an error occurs.
 */
export default async function createUserAuth(email, username, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/jiffy-ver-2.appspot.com/o/assets%2FdefaultProfile%2Fdefault-user-profile.webp?alt=media&token=a696e916-7833-484a-b2a2-d339734cbc80",
    });

    return {
      ...auth.currentUser,
      type: "UPDATE_ACCOUNTCREATED",
      accountCreated: true,
    };
  } catch (error) {
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
        console.log("An unknown error occurred:", errorMessage);
    }

    // biome-ignore lint/nursery/noConsole: <explanation>
    console.log(errorMessage);

    // Dispatch an action to update the error state with the errorMessage
    return {
      type: "UPDATE_ERROR",
      isError: true,
      message: errorMessage,
    };
  }
}
