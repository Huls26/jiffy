import { createPortal } from "react-dom";
import { useReducer } from "react";

const initialState = {
  profilePic: null,
  username: "",
  email: "",
  password: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE_PIC":
      return { ...state, profilePic: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
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

  const handleFileChange = (e) => {
    dispatch({ type: "SET_PROFILE_PIC", payload: e.target.files[0] });
  };

  return createPortal(
    <div className="p-6 text-gray-200 fixed top-1/5 left-1/2 -translate-x-1/2 w-1/2 min-w-80 max-w-2xl bg-slate-950 rounded-lg border-2 border-gray-300 shadow-lg">
      <h1 className="mb-5 text-lg font-bold">Update Profile</h1>

      <div className="flex flex-col gap-4">
        <input
          className="px-3 py-1 bg-gray-800 text-gray-200 rounded"
          placeholder="Username"
          type="text"
          value={state.username}
          onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} />
        <input
          placeholder="Email"
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} />
        <input
          placeholder="New Password"
          type="password"
          value={state.password}
          onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })} />
        <input className="text-blue-300" type="file" onChange={handleFileChange} />
      </div>
      <button type='button' onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Cancel
      </button>
    </div>,
    document.getElementById("root") // Append modal outside the normal React tree
  );
}