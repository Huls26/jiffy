import ForgotPassword from "./components/ForgotPassword";
import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";

export default function index() {
  return (
    <form noValidate="" action="" className="space-y-12">
      <div className="space-y-4">
        <InputEmail />
        <div>
          <ForgotPassword />
          <InputPassword />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50 dark:bg-blue-600 hover:opacity-70 active:opacity-55"
          >
            Sign in
          </button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">
          Don't have an account yet?
          <a
            rel="noopener noreferrer"
            href="/"
            className="hover:underline dark:text-blue-600"
          >
            Sign up
          </a>
          .
        </p>
      </div>
    </form>
  );
}
