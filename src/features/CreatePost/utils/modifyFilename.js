export default function modifyFilename(fileName) {
  // cut the length of the word
  const maxLengthWord = 15;
  const isLong = fileName.name.length > maxLengthWord;
  const splitWord = fileName.name.slice(0, maxLengthWord);
  const concatWord = `${splitWord}...`;
  const cutword = isLong ? concatWord : fileName.name;

  return cutword;
}
