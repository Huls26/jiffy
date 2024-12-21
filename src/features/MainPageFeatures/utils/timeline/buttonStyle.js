/**
 * A utility function that returns a different CSS style based on the isActiveButton parameter.
 *
 * @param {boolean} isActiveButton - A boolean indicating whether the button is active or not.
 *
 * @returns {string} The CSS style to be applied to the button.
 * @returns {string} defaultBtnStyle - The default CSS style for a non-active button.
 * @returns {string} activeBtnStyle - The CSS style for an active button.
 */

export default function buttonStyle(isActiveButton) {
  const defaultBtnStyle =
    "bg-gray-900 active:bg-sky-500 hover:opacity-75 text-gray-200 font-bold py-1 px-3 rounded";
  const activeBtnStyle =
    "bg-sky-500 hover:opacity-75 active:bg-sky-500  text-gray-200 font-bold py-1 px-3 rounded";
  const buttonStyle = isActiveButton ? activeBtnStyle : defaultBtnStyle;

  return buttonStyle;
}
