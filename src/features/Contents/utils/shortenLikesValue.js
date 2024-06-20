export default function shortenLikesValue(likesValue) {
  const s = String(likesValue);
  const len = s.length;
  const checkForThousands = len >= 4;
  const checkForMillions = len >= 7;
  const thousandsMillions = checkForMillions ? 7 : 4;
  const endValue = (thousandsMillions - 1) * -1;
  let KorM = '';
  let sliceMe = '';

  if (checkForMillions) {
    KorM = 'M';
    sliceMe = s.slice(0, endValue);
  } else if (checkForThousands) {
    KorM = 'K';
    sliceMe = s.slice(0, endValue);
  } else {
    return s;
  }

  return `${sliceMe}${KorM}`;
}
