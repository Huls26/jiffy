export default function setUserLike(state, action) {
  const { userId } = action;
  const { peopleLikes } = state;
  const setNewArray = [...peopleLikes];
  const index = setNewArray.indexOf(userId);

  if (index > -1) {
    setNewArray.splice(index, 1);
  } else {
    setNewArray.push(userId);
  }

  return [...setNewArray];
}
