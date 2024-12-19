export default function buttonStyle(isActiveButton) {
  const defaultBtnStyle =
    "bg-gray-900 active:bg-sky-500 hover:opacity-75 text-gray-200 font-bold py-1 px-3 rounded-l";
  const activeBtnStyle =
    "bg-sky-500 hover:opacity-75 active:bg-sky-500  text-gray-200 font-bold py-1 px-3 rounded-l";
  const buttonStyle = isActiveButton ? activeBtnStyle : defaultBtnStyle;

  return buttonStyle;
}
