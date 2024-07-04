export default function CreateAccountSection() {
  return (
    <p className="px-6 text-sm text-center dark:text-gray-600 cursor-default">
      Don't have an account yet?
      <a
        rel="noopener noreferrer"
        href="/signup"
        className="pl-1 hover:underline dark:text-blue-600"
      >
        Sign up.
      </a>
    </p>
  );
}
