/* eslint-disable default-param-last */
import shortenLikesValue from '@features/Contents/utils/shortenLikesValue';

export default function modifyValueSetBg(values, array, userId, setBg) {
  // modify values
  const shortenValues = shortenLikesValue(values);
  const isUserLike = array.includes(userId);
  // set button bg
  const btnBg = isUserLike ? 'bg-green' : `${setBg}`;

  return [shortenValues, btnBg];
}
