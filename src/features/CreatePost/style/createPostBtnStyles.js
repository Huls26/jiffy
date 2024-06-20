export default function btnStyle() {
  const createPostBtnStyle = `
                                inline-flex items-center 
                                bg-blue rounded-lg py-2.5 px-4 
                                font-PS font-bold 
                                text-center text-xs text-white  
                                active:opacity-80 active:ring-4 
                                dark:focus:ring-blue-900 
                                focus:ring-blue-200 hover:bg-aqua-1
                              `;
  const cancelFileBtnStyle = `
                        h-[15px] mt-1 ml-1 p-1 bg-bright-red
                        text-gray-light
                        rounded-full leading-[5px]
                        hover:text-white
                        hover:bg-bRed
                        active:bg-red
                      `;

  return ({
    cancelFileBtnStyle,
    createPostBtnStyle,
  });
}
