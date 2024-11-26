import { auth, db } from "@/lib/fb";
import { deleteUser, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

/**
 * This function creates a new user in Firestore and deletes the corresponding Firebase Authentication user.
 *
 * @param {Object} params - The parameters required for creating a user in Firestore.
 * @param {Function} params.dispatch - The dispatch function to update the application state.
 * @param {boolean} params.isError - A flag indicating whether there is an error.
 * @param {string} params.uid - The unique identifier of the user.
 * @param {string} params.email - The email of the user.
 * @param {string} params.username - The username of the user.
 * @param {string} params.fullName - The full name of the user.
 * @param {string} params.password - The password of the user.
 *
 * @returns {Promise<void>} - A promise that resolves when the user is created in Firestore and the Firebase Authentication user is deleted.
 */
export default async function createUserFirestore({
  dispatch,
  isError,
  uid,
  email,
  username,
  fullName,
  photoURL,
}) {
  console.log("test this code");

  if (!isError) {
    try {
      // I need to add profile photo and post photos link later
      await setDoc(doc(db, "users", uid), {
        email,
        username,
        fullName,
        userId: uid,
        dateCreated: Date.now(),
        followers: {},
        following: {},
        followersCount: 0,
        photoURL,
      });
      // This will sign out user account after creating a new account
      await signOut(auth);
    } catch (err) {
      // biome-ignore lint/nursery/noConsole: <explanation>
      console.log("Error adding document: ", err.message);
      const user = auth.currentUser;
      await deleteUser(user);
      dispatch({
        type: "UPDATE_ERROR",
        isError: true,
        message: "Oops! something went wrong",
      });
    }
  }
}
