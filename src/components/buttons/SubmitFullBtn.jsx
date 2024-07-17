import PropTypes from "prop-types";

export default function SignInButton({ text }) {
  return (
    <button
      type="button"
      className="
        w-full px-8 py-3 
        font-semibold rounded-md 
        dark:text-gray-50 dark:bg-blue-600 
        hover:opacity-70 active:opacity-55
      "
    >
      {text}
    </button>
  );
}

SignInButton.propTypes = {
  text: PropTypes.string.isRequired,
};
