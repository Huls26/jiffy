import { db } from "@/lib/fb";
import { collection, getDocs, query, where } from "firebase/firestore";

/**
 * Asynchronously checks if the given username already exists in the database.
 *
 * @param {string} username - The username to check.
 * @returns {Promise<number>} - A promise that resolves to the number of documents found with the given username.
 */
export default async function checkUsername(username) {
  try {
    // Reference to the users collection
    const usersRef = collection(db, "users");

    // Query to check if a user with the given username exists
    const userDoc = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(userDoc);

    // Return true if a document with the username exists, otherwise false
    return querySnapshot.docs.length > 0;
  } catch (error) {
    // console.log("Error checking username:");
    // biome-ignore lint/nursery/noConsole: <explanation>
    console.error("Error checking username:", error);
    // You can return a default value or rethrow the error based on your needs.
    return false;
  }
}
