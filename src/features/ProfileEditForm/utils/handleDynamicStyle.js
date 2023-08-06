export default function handleDynamicStyle(isLoading, userUpdateInfo) {
  const loadingStyle = isLoading ? 'pointer-events-none animate-pulse' : '';
  const successStyle = userUpdateInfo?.update ? 'outline outline-4 outline-green' : '';
  const errorStyle = userUpdateInfo?.error ? 'outline outline-4 outline-bRed' : '';

  return `${loadingStyle} ${successStyle}, ${errorStyle}`;
}
