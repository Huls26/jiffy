export const INITIAL_STATE = {
};

export default function reducerMethod(state, action) {
  switch (action.type) {
    // clean up code
    case 'USER_LIKE': {
      const { userId } = action;
      const { peopleLikes } = state;
      const setNewArray = [...peopleLikes];
      const index = setNewArray.indexOf(userId);

      if (index > -1) {
        setNewArray.splice(index, 1);
      } else {
        setNewArray.push(userId);
      }

      return {
        ...state,
        peopleLikes: setNewArray,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
