export default function publishBtnStyle(isActive) {
  const defaultPublishStyle =
    "px-2 py-0.5 bg-sky-950 font-semibold rounded-md opacity-70";
  const activePublishStyle =
    "px-2 py-0.5 bg-sky-950 font-semibold rounded-md hover:bg-sky-900 active:text-green-400";
  const publishBtnStyle = isActive ? activePublishStyle : defaultPublishStyle;

  return publishBtnStyle;
}
