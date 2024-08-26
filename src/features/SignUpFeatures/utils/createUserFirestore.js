import { auth, db } from "@/lib/fb";
import { deleteUser } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default async function createUserFirestore({
  dispatch,
  isError,
  uid,
  email,
  username,
  fullName,
  password,
}) {
  if (!isError) {
    try {
      await setDoc(doc(db, "users", uid), {
        email,
        username,
        fullName,
        password,
      });
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
