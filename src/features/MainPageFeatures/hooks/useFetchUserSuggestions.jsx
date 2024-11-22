

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


// export default function useFetchUserSuggestions() {
//   // Importing necessary context providers
//   const [globalState] = useContext(GlobalContext);
//   const [sidebarState, dispatch] = useContext(reducerContext);

//   // Extracting necessary data from the global and sidebar states
//   const { userId } = globalState;
//   const { suggestedUsersList, isLoading } = sidebarState;

//   /**
//    * Fetches random user suggestions and updates the suggestedUsersList in the sidebar state.
//    *
//    * @async
//    * @function fetchUserSuggestions
//    */
//   async function fetchUserSuggestions() {
//     // Dispatching an action to update the loading state
//     dispatch({
//       type: "UPDATE_LOADING",
//       isLoading: true,
//     });

//     try {
//       // Fetching random user suggestions using the fetchRandomUsers utility function
//       const suggestionUsers = await fetchRandomUsers(userId);

//       // Dispatching an action to update the suggestedUsersList in the sidebar state
//       dispatch({
//         type: "UPDATE_LIST",
//         suggestedUsersList: suggestionUsers,  // Always update with fetched users
//         isLoading: false,  // Update loading state after fetching users
//       });
//     } catch (error) {
//       console.error("Failed to fetch user suggestions:", error);
//       // Optionally handle error state (e.g., show a message to the user)
//     }
//   }

//   function fetchSuggestions() {
//     console.log("triggered");
//     // Only fetch suggestions if suggestedUsersList is null or undefined
//     if (suggestedUsersList === null) {
//       fetchUserSuggestions();
//     } else {
//       dispatch({
//         type: "UPDATE_LIST",
//         suggestedUsersList: null,
//       })
//     }
//   }

//   // Returning the suggestedUsersList and fetchUserSuggestions function
//   return {
//     suggestedUsersList,
//     fetchUserSuggestions: fetchSuggestions,
//     sidebarIsLoading: isLoading,
//   };
// }