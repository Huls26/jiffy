import ProfilePageModalInputField from "./ProfilePageModalInputField";
import { auth, db, storage } from "@/lib/fb";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { GlobalContext } from "@/contexts/GlobalContextProvider";

import { createPortal } from "react-dom";
import { useReducer, useContext } from "react";

const initialState = {
  profilePic: null,
  username: "",
  fullName: "",
  email: "",
  password: "",
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE_PIC":
      return { ...state, profilePic: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_FULL_NAME":
      return { ...state, fullName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [globalContextState] = useContext(GlobalContext);

  const handleFileChange = (e) => {
    dispatch({ type: "SET_PROFILE_PIC", payload: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const userId = globalContextState.userId;
      const userDocRef = doc(db, "users", userId);
      let imageUrl = null;

      // Upload profile picture to Firebase Storage and update user's profile picture in Firestore
      if (state.profilePic) {
        // upload profile picture to Firebase Storage
        const storageRef = ref(storage, `userProfile/${userId}`);
        await uploadBytes(storageRef, state.profilePic);
        imageUrl = await getDownloadURL(storageRef);
        // update auth photoURL
        await updateProfile(auth.currentUser, {
          photoURL: imageUrl,
        });
      }

      // Update email address
      if (state.email && state.email !== auth.currentUser.email) {
        await updateEmail(auth.currentUser, state.email);
        await updateDoc(userDocRef, { email: state.email });
      }

      if (state.password) {
        await updatePassword(auth.currentUser, state.password);
      }

      // Update Firestore document
      await updateDoc(userDocRef, {
        // username: state.username,
        // fullName: state.fullName,
        // email: state.email,
        ...(imageUrl && { photoURL: imageUrl }) // Only update if a new image is uploaded
      });
    } catch (e) {
      console.error(e);
      alert("An error occurred while updating your profile. Please try again later.");
      return;
    }

    alert("Profile updated successfully!");
  };


  return createPortal(
    <div className="p-6 text-gray-200 fixed top-1/5 left-1/2 -translate-x-1/2 w-1/2 min-w-80 max-w-2xl bg-slate-950 rounded-lg border-2 border-gray-300 shadow-lg">
      <h1 className="mb-5 text-lg font-bold">Update Profile</h1>

      <div className="flex flex-col gap-4">
        <ProfilePageModalInputField
          placeholder={"Username"}
          type={"text"}
          value={state.username}
          onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} />
        <ProfilePageModalInputField
          placeholder={"Full Name"}
          type={"text"}
          value={state.fullName}
          onChange={(e) => dispatch({ type: "SET_FULL_NAME", payload: e.target.value })} />
        <ProfilePageModalInputField
          placeholder={"Email"}
          type={"email"}
          value={state.email}
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} />
        <ProfilePageModalInputField
          placeholder={"New Password"}
          type={"password"}
          value={state.password}
          onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })} />
        <div className="flex flex-col">
          <label htmlFor="modalProfilePic" className="text-blue-100">Profile Picture:</label>
          <input className="text-blue-300" name="modalProfilePic" id="modalProfilePic" type="file" onChange={handleFileChange} />
        </div>
      </div>

      <div className="mt-5 space-x-2">
        <button type='button' onClick={onClose} className="px-3 py-1 bg-red-600 text-gray-200 font-semibold rounded hover:bg-red-800 active:bg-red-500">
          Cancel
        </button>
        <button type='submit' onClick={handleSubmit} className="px-3 py-1 bg-blue-500 text-gray-200 font-semibold rounded hover:bg-blue-600 active:bg-blue-700">
          Update
        </button>
      </div>
    </div>,
    document.getElementById("root") // Append modal outside the normal React tree
  );
}