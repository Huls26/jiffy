import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";

/**
 * A React functional component that renders a logout button.
 * It uses the Firebase Authentication SDK to sign out the user and updates the global state.
 *
 * @returns {JSX.Element} - A logout button component.
 */
export default function LogoutButton() {
  const [globalStateContext, dispatch] = useContext(GlobalContext);

  /**
   * Handles the logout process by signing out the user using Firebase Authentication.
   * Updates the global state to reflect the user's logout status.
   */
  const handleLogout = () => {
    const auth = getAuth();
    dispatch({ type: "UPDATE_LOADING", isLoading: true });
    signOut(auth)
      .then(() => {
        // Update the global state to reflect the user is logged out
        dispatch({
          type: "UPDATE_USERLOGIN",
          isUserLoggedIn: false,
          email: null,
          username: null,
          fullName: null,
          photoURL: null,
        });
        dispatch({ type: "UPDATE_LOADING", isLoading: false });
      })
      .catch((error) => {
        // Handle any errors during sign out
        // biome-ignore lint/nursery/noConsole: <explanation>
        console.error("Error signing out: ", error);
        dispatch({ type: "UPDATE_LOADING", isLoading: false });
      });
  };

  return (
    <button
      type="button"
      title="Sign out"
      onClick={handleLogout}
      disabled={globalStateContext.isLoading}
      className="text-xs font-bold text-gray-200 md:text-lg border-gray-600 hover:text-gray-400 transition cursor-pointer"
    >
      {globalStateContext.isLoading ? "Logging out..." : "<Logout />"}
    </button>
  );
}
