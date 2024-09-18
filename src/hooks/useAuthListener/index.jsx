import { reducerContext } from "@/contexts/ReducerContextProvider";
import { auth } from "@/lib/fb";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";

/**
 * A custom React hook that listens for Firebase authentication state changes and updates the global state accordingly.
 *
 * @returns {Object} The current global state context.
 */
export default function useAuthListener() {
  const [globalStateContext, dispatch] = useContext(reducerContext);

  useEffect(() => {
    // Start loading when the effect runs
    dispatch({ type: "UPDATE_LOADING", isLoading: true });

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "UPDATE_USERLOGIN",
          isUserLoggedIn: true,
          email: user.email,
          username: user.displayName,
          fullName: "",
          uid: user.uid,
          photoURL: user.photoURL,
        });
      } else {
        dispatch({
          type: "UPDATE_USERLOGIN",
          isUserLoggedIn: false,
          email: null,
          username: null,
          fullName: null,
          uid: null,
          photoURL: null,
        });
      }

      // Stop loading after user status has been updated
      dispatch({ type: "UPDATE_LOADING", isLoading: false });
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]); // Include dispatch as a dependency to avoid warnings

  return globalStateContext;
}
