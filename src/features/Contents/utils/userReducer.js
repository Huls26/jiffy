import setUserLike from './setUserLike';

export const INITIAL_STATE = {
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    // max likes for now is 100M
    case 'USER_LIKE': {
      const { peopleLikes, likes } = setUserLike(state, action);

      return {
        ...state,
        likes,
        peopleLikes,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
