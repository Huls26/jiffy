import setUserLike from './setUserLike';

export const INITIAL_STATE = {
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    // to do: clean up code
    case 'USER_LIKE': {
      // const { userId } = action;
      // const { peopleLikes } = state;
      // const setNewArray = [...peopleLikes];
      // const index = setNewArray.indexOf(userId);

      // if (index > -1) {
      //   setNewArray.splice(index, 1);
      // } else {
      //   setNewArray.push(userId);
      // }
      const peopleLikes = setUserLike(state, action);

      return {
        ...state,
        peopleLikes,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
