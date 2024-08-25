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
    // Check if the username already exists in the database.
    const usersRef = collection(db, "users");
    const userDoc = query(usersRef, where("username", "==", username));

    const querySnapshot = await getDocs(userDoc);

    return querySnapshot.docs.length > 0;
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  } catch (error) {
    // biome-ignore lint/nursery/noConsole: <explanation>
    console.log("Error checking username:");
    // You can return a default value or rethrow the error based on your needs.
    return true;
  }
}
