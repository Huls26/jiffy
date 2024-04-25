export default function contenBtnStyle(bgCol) {
  const btnStyle = `
                ${bgCol} px-3 py-1
                font-A font-bold text-sm 
                grow-0 basis-0
                border-dark-2
                border border-b-2 border-r-2 rounded
                capitalize
                hover:opacity-80
                active:bg-green
              `;
  return {
    btnStyle,
  };
}
