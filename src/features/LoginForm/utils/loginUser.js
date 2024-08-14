import { auth } from "@/lib/fb";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * Handles user login using Firebase authentication.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 *
 * @returns {Promise<firebase.auth.UserCredential>} - A promise that resolves with the user's credential if the login is successful.
 * If the login fails, the promise rejects with an error.
 *
 * @throws {Error} - Throws an error with the error message from Firebase if the login fails.
 */
export default async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}
