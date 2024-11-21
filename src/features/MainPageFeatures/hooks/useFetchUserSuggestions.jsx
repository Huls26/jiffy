import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import fetchRandomUsers from '../utils/accountSuggestion/fetchRandomUsers';

import { useContext } from "react";

/**
 * A custom React hook that fetches and manages user suggestions for the main page.
 *
 * @function useFetchUserSuggestions
 * @returns {Object} An object containing the suggestedUsersList and fetchUserSuggestions function.
 *
 * @example
 * import useFetchUserSuggestions from './useFetchUserSuggestions';
 *
 * function MyComponent() {
 *   const { suggestedUsersList, fetchUserSuggestions } = useFetchUserSuggestions();
 *
 *   // ...
 * }
 */
export default function useFetchUserSuggestions() {
  // Importing necessary context providers
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(reducerContext);

  // Extracting necessary data from the global and sidebar states
  const { userId } = globalState;
  const { suggestedUsersList, isLoading } = sidebarState;

  /**
   * Fetches random user suggestions and updates the suggestedUsersList in the sidebar state.
   *
   * @async
   * @function fetchUserSuggestions
   */
  async function fetchUserSuggestions() {
    // Dispatching an action to update the loading state
    dispatch({
      type: "UPDATE_LOADING",
      isLoading: true,
    });

    try {
      // Fetching random user suggestions using the fetchRandomUsers utility function
      const suggestionUsers = await fetchRandomUsers(userId);

      // Dispatching an action to update the suggestedUsersList in the sidebar state
      dispatch({
        type: "UPDATE_LIST",
        suggestedUsersList: suggestionUsers,  // Always update with fetched users
        isLoading: false,  // Update loading state after fetching users
      });
    } catch (error) {
      console.error("Failed to fetch user suggestions:", error);
      // Optionally handle error state (e.g., show a message to the user)
    }
  }

  function fetchSuggestions() {
    // Only fetch suggestions if suggestedUsersList is null or undefined
    if (suggestedUsersList === null) {
      fetchUserSuggestions();
    } else {
      dispatch({
        type: "UPDATE_LIST",
        suggestedUsersList: null,
      })
    }
  }

  // Returning the suggestedUsersList and fetchUserSuggestions function
  return {
    suggestedUsersList,
    fetchUserSuggestions: fetchSuggestions,
    sidebarIsLoading: isLoading,
  };
}