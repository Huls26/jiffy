import ProfilePageModalInputField from "./ProfilePageModalInputField";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import LoadingSpinner from "./ProfilePageLoadingSpinner";
import updateUserProfile from "../utils/updateUserProfile";

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
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
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
        <button type='submit' onClick={() => updateUserProfile(dispatch, globalContextState, state)} className="px-3 py-1 bg-blue-500 text-gray-200 font-semibold rounded hover:bg-blue-600 active:bg-blue-700" disabled={state.isLoading}>
          Update
        </button>
      </div>

      <LoadingSpinner isLoading={state.isLoading} />
    </div>,
    document.getElementById("root") // Append modal outside the normal React tree
  );
}