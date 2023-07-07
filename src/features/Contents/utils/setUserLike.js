export default function setUserLike(state, action) {
  const { userId } = action;
  const { peopleLikes } = state;
  let { likes } = state;
  const setNewArray = [...peopleLikes];
  const index = setNewArray.indexOf(userId);

  if (index > -1 && likes > 0) {
    likes -= 1;
    setNewArray.splice(index, 1);
  } else {
    likes += 1;
    setNewArray.push(userId);
  }

  return { likes, peopleLikes: [...setNewArray] };
}
