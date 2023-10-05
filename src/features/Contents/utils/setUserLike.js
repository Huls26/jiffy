import { handleLikeFirebase } from './updateFirebase';
import incrementFollowLike from './incrementFollowLike';

export default function setUserLike(state, action) {
  // prevent number of likes to 1500;
  const { userId, contentId } = action;
  const { likes, peopleLikes } = state;
  const maxLikes = 1500;

  if (peopleLikes.length <= maxLikes) {
    const {
      setNewValues,
      setNewArray,
    } = incrementFollowLike(likes, peopleLikes, userId);

    // debouncing
    // update firebase posts: likes and peopleLikes
    handleLikeFirebase(userId, contentId, setNewValues, setNewArray);
    return { likes: setNewValues, peopleLikes: [...setNewArray] };
  }

  return { likes, peopleLikes };
}
