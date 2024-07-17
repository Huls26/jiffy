export default function LoginSignUpContainer({ children }) {
  return (
    <main
      className="
                  flex flex-col 
                  m-auto mt-10 max-w-md p-10 rounded-md sm:p-10 
                  dark:bg-gray-900 dark:text-gray-100 
                "
    >
      {children}
    </main>
  );
}
