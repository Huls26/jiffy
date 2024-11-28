import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { useCallback, useContext } from "react";
import fetchRandomUsers from "../utils/accountSuggestion/fetchRandomUsers";

/**
 * A custom React hook that fetches and manages user suggestions.
 *
 * @function useFetchUserSuggestions
 * @param {Function} dispatch - The dispatch function from a reducer or context.
 * @returns {Object} An object containing the `fetchUserSuggestions` function.
 *
 * @example
 * import useFetchUserSuggestions from './useFetchUserSuggestions';
 *
 * function MyComponent({ dispatch }) {
 *   const { fetchUserSuggestions } = useFetchUserSuggestions(dispatch);
 *
 *   useEffect(() => {
 *     fetchUserSuggestions();
 *   }, [fetchUserSuggestions]);
 * }
 */
export default function useFetchUserSuggestions(dispatch) {
  // Extract necessary data from GlobalContext
  const [globalState] = useContext(GlobalContext);
  const { userId } = globalState;

  // Define a stable function to fetch user suggestions
  const fetchUserSuggestions = useCallback(async () => {
    // Dispatch loading state update
    dispatch({ type: "UPDATE_LOADING", isLoading: true });

    try {
      // Fetch random users
      const suggestionUsers = await fetchRandomUsers(userId);

      // Dispatch the updated list and stop loading
      dispatch({
        type: "UPDATE_LIST",
        suggestedUsersList: suggestionUsers,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to fetch user suggestions:", error);

      // Optionally handle error state (e.g., dispatch an error action)
      dispatch({ type: "FETCH_ERROR", error: true });
    }
  }, [userId, dispatch]);

  return { fetchUserSuggestions };
}