export const INITIAL_STATE = {
  contentsData: [],
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    case 'SET_CONTENTSDATA': {
      return {
        ...state,
        contentsData: [...action.contents],
      };
    }
    default:
      return {
        ...state,
      };
  }
}
