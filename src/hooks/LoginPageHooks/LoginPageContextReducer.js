export const INITIAL_STATE = {
  email: "",
  password: "",
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export default function reducerMethod(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
