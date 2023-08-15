export default function filterContent(contents, doc, searchParams, c) {
  const newArray = [...contents];
  const d = doc.data();
  const contentFilter = searchParams.get('f');

  if (d[contentFilter]) {
    newArray.push(c);
  } else if (contentFilter === null) {
    newArray.push(c);
  }

  return newArray;
}
