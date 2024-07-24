/**
 * This function renders a section with a label and a link for a password reset.
 *
 * @returns {JSX.Element} - A JSX element representing the password reset section.
 */
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
