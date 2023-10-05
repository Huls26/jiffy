import setUserLike from './setUserLike';
import setUserFollow from './setUserFollow';

export const INITIAL_STATE = {
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    // max follows for now is 1500
    case 'USER_FOLLOW': {
      const { peopleFollows, followers } = setUserFollow(state, action);

      return {
        ...state,
        followers,
        peopleFollows,
      };
    }
    // max likes for now is 1500
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
