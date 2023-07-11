export const INITIAL_STATE = {
  userId: '',
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    case 'SET_USERID': {
      return {
        ...state,
        userId: action.id,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
