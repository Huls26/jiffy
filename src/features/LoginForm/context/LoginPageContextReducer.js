export const INITIAL_STATE = {
  email: "",
  password: "",
  isErrorAuth: false,
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
 * @param {boolean} state.isErrorAuth - Indicates if there was an authentication error.
 * @param {boolean} state.isLoading - Indicates if an authentication request is in progress.
 * @param {string} action.type - The type of action being performed.
 * @param {any} action.payload - The payload associated with the action (type varies by action).
 * @returns {Object} - The updated state of the application.
 * @throws {Error} - Throws an error if an invalid action type is encountered.
 */
// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export default function reducerMethod(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "UPDATE_VALIDAUTH":
      return { ...state, isErrorAuth: false };
    case "UPDATE_INVALIDAUTH":
      // this will set error state to true and set password to ''
      return { ...state, password: "", isErrorAuth: true };
    case "UPDATE_ISLOADING":
      return { ...state, isLoading: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
