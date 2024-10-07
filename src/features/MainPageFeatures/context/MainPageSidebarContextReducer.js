/**
 * The initial state for user authentication.
 * @constant
 * @type {Object}
 */
export const INITIAL_STATE = {
  errorMessage: "",
  isError: false,
  isLoading: false,
};

/**
 * A reducer function for managing user authentication state.
 *
 * @function reducerMethod
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object dispatched to the reducer.
 * @param {string} state.email - The current email of the user.
 * @param {string} state.password - The current password of the user.
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
      return {
        ...state,
        isErrorAuth: action.isError,
        errorMessage: action.message,
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
