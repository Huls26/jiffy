const INITIAL_STATE = {
  errorMessage: "",
  isError: false,
  isLoading: false,
  imageName: "",
  imageFile: null,
  postContentText: "",
  postContentLoading: false,
};

function reducerMethod(state, action) {
  switch (action.type) {
    case "UPDATE_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "UPDATE_POST_MODAL_LOADING":
      return { ...state, postContentLoading: action.payload };
    case "UPDATE_ERROR":
      return {
        ...state,
        isErrorAuth: action.isError,
        errorMessage: action.message,
      };
    case "UPDATE_IMAGE_NAME":
      return {
        ...state,
        imageName: action.imageName,
      };
    case "HANDLE_IMAGE_FILE":
      return {
        ...state,
        imageName: action.imageName,
        imageFile: action.imageFile,
      };
    case "SET_POST_CONTENTTEXT":
      return {
        ...state,
        postContentText: action.payload,
      };
    case "RESET_CONTENTTEXT":
      return {
        ...state,
        imageName: "",
        imageFile: null,
        postContentText: "",
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export { INITIAL_STATE, reducerMethod };
