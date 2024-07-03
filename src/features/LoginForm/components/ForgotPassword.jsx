export default function ForgotPassword() {
  return (
    <section className="flex justify-between mb-2">
      <label htmlFor="password" className="text-sm">
        Password
      </label>
      <a
        rel="noopener noreferrer"
        href="/"
        className="text-xs hover:underline dark:text-gray-600"
      >
        Forgot password?
      </a>
    </section>
  );
}
