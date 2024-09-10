import { reducerContext } from "@/contexts/ReducerContextProvider";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";

/**
 * A React functional component that renders a logout button.
 * It uses the Firebase Authentication SDK to sign out the user and updates the global state.
 *
 * @returns {JSX.Element} - A logout button component.
 */
export default function LogoutButton() {
  const [globalStateContext, dispatch] = useContext(reducerContext);

  /**
   * Handles the logout process by signing out the user using Firebase Authentication.
   * Updates the global state to reflect the user's logout status.
   */
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Update the global state to reflect the user is logged out
        dispatch({
          type: "UPDATE_USERLOGIN",
          isUserLoggedIn: false,
          email: null,
          username: null,
          fullName: null,
        });
        dispatch({ type: "UPDATE_LOADING", isLoading: false });
      })
      .catch((error) => {
        // Handle any errors during sign out
        console.error("Error signing out: ", error);
        dispatch({ type: "UPDATE_LOADING", isLoading: false });
      });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={globalStateContext.isLoading}
    >
      {"<Logout />"}
    </button>
  );
}
