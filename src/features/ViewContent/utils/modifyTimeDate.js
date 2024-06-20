export default function modifyTimeDate(docData) {
  const { date } = docData;
  const sliceFormat = -31;
  const utcString = new Date(date.seconds * 1000)
    .toString().slice(0, sliceFormat);

  return utcString;
}
