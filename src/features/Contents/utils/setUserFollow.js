import incrementFollowLike from './incrementFollowLike';

export default function setUserLike(state, action) {
  const { userId } = action;
  const { followers, peopleFollows } = state;
  const {
    setNewValues,
    setNewArray,
  } = incrementFollowLike(followers, peopleFollows, userId);

  return { followers: setNewValues, peopleFollows: [...setNewArray] };
}
