import checkUsername from "./checkUsername";
import createUserAuth from "./createUserAuth";
import createUserFirestore from "./createUserFirestore";

/**
 * This function creates a new user in the application.
 * It checks the validity of the password, username, and email,
 * and then creates the user in Firebase Authentication and Firestore.
 *
 * @param {object} params - The parameters required for creating a new user.
 * @param {function} params.dispatch - The dispatch function for updating the application state.
 * @param {string} params.email - The email of the new user.
 * @param {string} params.username - The username of the new user.
 * @param {string} params.fullName - The full name of the new user.
 * @param {string} params.password - The password of the new user.
 * @param {string} params.confirmPassword - The confirmation password of the new user.
 *
 * @returns {object} - The options to be dispatched to update the application state.
 * @returns {object.type} - The type of the dispatch action.
 * @returns {object.isError} - Indicates whether an error occurred during the process.
 * @returns {object.message} - The message to be displayed to the user.
 */
export default async function createNewUser({
  dispatch,
  email,
  username,
  fullName,
  password,
  confirmPassword,
}) {
  let setDispatchOptions = {};

  if (password !== confirmPassword) {
    setDispatchOptions = {
      type: "UPDATE_ERROR",
      isError: true,
      message: "Check Password",
    };
  } else if (password.length < 6 || confirmPassword.length < 6) {
    setDispatchOptions = {
      type: "UPDATE_ERROR",
      isError: true,
      message: "Password must be at least 6 characters",
    };
  } else if (await checkUsername(username)) {
    setDispatchOptions = {
      type: "UPDATE_ERROR",
      isError: true,
      message: "Username is already taken",
    };
  } else {
    const { uid, type, isError, message } = await createUserAuth(
      email,
      username,
      password,
      dispatch,
    );
    createUserFirestore({
      dispatch,
      isError,
      uid,
      email,
      fullName,
      username,
      password,
    });
    setDispatchOptions = {
      type,
      isError,
      message,
    };
  }

  return setDispatchOptions;
}
