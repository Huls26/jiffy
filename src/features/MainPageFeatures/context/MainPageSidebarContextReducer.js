/**
 * The initial state for user authentication.
 * @constant
 * @type {Object}
 */
export const INITIAL_STATE = {
  errorMessage: "",
  isError: false,
  isLoading: false,
  suggestedUsersList: null,
  isDisplayPostModalOpen: false,
  imageName: "",
};

/**
 * A reducer function for managing the main page sidebar context state.
 *
 * @function reducerMethod
 * @param {Object} state - The current state of the main page sidebar context.
 * @param {Object} action - The action object dispatched to the reducer.
 * @param {string} action.type - The type of action being performed.
 * @param {string} action.payload - The payload associated with the action.
 * @returns {Object} - The updated state of the main page sidebar context.
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
    case "UPDATE_DISPLAY_POST_MODAL":
      return {
        ...state,
        isDisplayPostModalOpen: !state.isDisplayPostModalOpen,
        imageName: "",
      };
    case "UPDATE_LIST":
      return {
        ...state,
        suggestedUsersList: action.suggestedUsersList,
      };
    case "UPDATE_IMAGE_NAME":
      return {
        ...state,
        imageName: action.imageName,
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
