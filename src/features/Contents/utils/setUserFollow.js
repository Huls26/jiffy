import incrementFollowLike from './incrementFollowLike';

export default function setUserLike(state, action) {
  const { userId } = action;
  const { followers, peopleFollows } = state;
  const maxFollows = 1500;

  if (peopleFollows.length <= maxFollows) {
    const {
      setNewValues,
      setNewArray,
    } = incrementFollowLike(followers, peopleFollows, userId);

    return { followers: setNewValues, peopleFollows: [...setNewArray] };
  }

  return { followers, peopleFollows };
}
