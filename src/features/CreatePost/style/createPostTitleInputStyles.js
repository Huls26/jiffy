export default function createPostTitleInputStyle() {
  const containerStyle = 'px-4 py-2 bg-primary-1 rounded-t-lg';
  const inputStyle = `
                      w-full px-1 
                      font-A text-xl text-dark-1 
                      bg-white border border-primary-1 rounded-md outline-none
                      focus:border-gray focus:ring-0 
                      dark:bg-primary-1 dark:placeholder-gray 
                    `;

  return {
    containerStyle,
    inputStyle,
  };
}
