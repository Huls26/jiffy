export default function createPostTextArea() {
  const textAreaStyle = `
                          w-full px-1 bg-white 
                          border border-primary-1 rounded-md outline-none
                          font-A text-lg text-dark-1   
                          focus:border-gray focus:ring-0 
                          dark:bg-primary-1 dark:placeholder-gray
                        `;

  return ({
    textAreaStyle,
  });
}
