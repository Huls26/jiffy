export default function contentStyle() {
  const cS = `
    font-A font-bold text-lg text-center text-gray-dark 
    hover:opacity-80 active:text-purple
  `;
  const contentComponentStyle = `
    border-dark-2 border border-b-2 border-r-2 
    b-3 md:rounded-lg shadow-lg
  `;
  return {
    cS,
    contentComponentStyle,
  };
}
