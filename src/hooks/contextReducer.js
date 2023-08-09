export const INITIAL_STATE = {
  userId: '',
  userData: '',
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    case 'SET_USERDATA': {
      return {
        ...state,
        userData: { ...action.userData },
      };
    }
    case 'SET_USERID': {
      return {
        ...state,
        userId: action.id,
      };
    }
    default:
      return {
        ...state,
        userData: {},
      };
  }
}
