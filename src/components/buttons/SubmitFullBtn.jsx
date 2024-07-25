import PropTypes from "prop-types";

/**
 * A React functional component that renders a full-width button with custom styles.
 *
 * @function SubmitFullButton
 * @param {object} props - The component's props.
 * @param {string} props.text - The text to be displayed on the button.
 * @returns {JSX.Element} - A JSX element representing the button.
 */
export default function SubmitFullButton({ text }) {
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

SubmitFullButton.propTypes = {
  text: PropTypes.string.isRequired,
};
