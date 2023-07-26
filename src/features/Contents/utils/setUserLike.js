import incrementFollowLike from './incrementFollowLike';

export default function setUserLike(state, action) {
  const { userId } = action;
  const { likes, peopleLikes } = state;
  const {
    setNewValues,
    setNewArray,
  } = incrementFollowLike(likes, peopleLikes, userId);

  return { likes: setNewValues, peopleLikes: [...setNewArray] };
}
