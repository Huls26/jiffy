const INITIAL_STATE = {
  errorMessage: "",
  isError: false,
  isLoading: false,
  isDisplayPostModalOpen: false,
  imageName: "",
  imageFile: null,
  postContentText: "",
  postContentLoading: false,
};

function reducerMethod(state, action) {
  switch (action.type) {
    case "UPDATE_LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export { INITIAL_STATE, reducerMethod };
