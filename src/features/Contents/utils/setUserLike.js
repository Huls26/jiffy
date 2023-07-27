import incrementFollowLike from './incrementFollowLike';

export default function setUserLike(state, action) {
  // prevent number of likes to 1500;
  const { userId } = action;
  const { likes, peopleLikes } = state;
  const maxLikes = 1500;

  if (peopleLikes.length <= maxLikes) {
    const {
      setNewValues,
      setNewArray,
    } = incrementFollowLike(likes, peopleLikes, userId);

    return { likes: setNewValues, peopleLikes: [...setNewArray] };
  }

  return { likes, peopleLikes };
}
