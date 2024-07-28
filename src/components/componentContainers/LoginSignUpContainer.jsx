/**
 * A container component for login and sign-up forms.
 * It provides a consistent layout and styling for these forms.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the container.
 *
 * @returns {React.ReactElement} - The rendered main container component.
 */
export default function LoginSignUpContainer({ children }) {
  return (
    <main
      className="
                  flex flex-col
                  mx-8 my-16 p-5 sm500:m-auto sm500:mt-10 sm500:p-10 max-w-md rounded-md  
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      {children}
    </main>
  );
}
