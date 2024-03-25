export default function displayDetailsContentsStyle() {
  const displayStyle = `
    h-72 mb-2 
    bg-gradient-to-r from-blue via-purple to-pink 
    shadow-lg transition 
    hover:transform-gpu hover:scale-[1.02] hover:rounded-2xl 
    md:rounded-t-sm
  `;
  const detailsStyle = ` 
    flex justify-between items-start
    w-full
    px-3 text-dark-2
  `;

  return {
    displayStyle,
    detailsStyle,
  };
}
