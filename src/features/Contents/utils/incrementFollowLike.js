export default function incrementFollowLike(values, arrays, userId) {
  let setNewValues = values || 0;
  const setNewArray = arrays ? [...arrays] : [];
  const index = setNewArray.indexOf(userId);

  if (index > -1 && setNewValues > 0) {
    setNewValues -= 1;
    setNewArray.splice(index, 1);
  } else {
    setNewValues += 1;
    setNewArray.push(userId);
  }

  return { setNewValues, setNewArray };
}
