import { db } from "@/lib/fb";
import { collection, getDocs, query, where } from "firebase/firestore";
import useSignUpState from "../hooks/useSignUpState";
import SignUpBtnSection from "./SignUpBtnSection";
import SignUpInputSection from "./SignUpInputSection";

export default function SignUpFormSection() {
  const { dispatch, username, password, confirmPassword } = useSignUpState();

  // Check if the username already exists in the database.
  // fix code later
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
