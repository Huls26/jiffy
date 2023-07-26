import incrementFollowLike from './incrementFollowLike';

export default function setUserLike(state, action) {
  // prevent number of likes to 1 million;
  const { userId } = action;
  const { likes, peopleLikes } = state;

  if (String(likes).length <= 7) {
    const {
      setNewValues,
      setNewArray,
    } = incrementFollowLike(likes, peopleLikes, userId);

    return { likes: setNewValues, peopleLikes: [...setNewArray] };
  }

  return { likes, peopleLikes };
}
