/**
 * The initial state for user authentication.
 * @constant
 * @type {Object}
 */
export const INITIAL_STATE = {
  email: "",
  username: "",
  fullName: "",
  isError: false,
  isLoading: false,
  userId: "",
  userLogin: false,
  photoURL: "",
};

/**
 * A reducer function for managing user authentication state.
 *
 * @function reducerMethod
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object dispatched to the reducer.
 * @param {string} action.type - The type of action being performed.
 * @param {string} action.payload - The payload associated with the action.
 * @returns {Object} - The updated state of the application.
 * @throws {Error} - Throws an error if an invalid action type is encountered.
 */
// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export default function reducerMethod(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "UPDATE_ERROR":
      return { ...state, isError: action.isError };
    case "UPDATE_USERLOGIN":
      return {
        ...state,
        userLogin: action.isUserLoggedIn,
        email: action.email,
        username: action.username,
        fullName: action.fullName,
        userId: action.uid,
        photoURL: action.photoURL,
        isLoading: false,
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
