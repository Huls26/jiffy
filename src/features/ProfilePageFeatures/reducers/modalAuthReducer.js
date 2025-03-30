const initialState = {
  profilePic: null,
  username: "",
  fullName: "",
  email: "",
  password: "",
  isLoading: false,
};

const reducerAction = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE_PIC":
      return { ...state, profilePic: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_FULL_NAME":
      return { ...state, fullName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export { initialState, reducerAction };
