import PropTypes from "prop-types";

/**
 * A React functional component that renders a full-width button with custom styles.
 *
 * @function SubmitFullButton
 * @param {object} props - The component's props.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {boolean} [props.isInvalid=false] - A flag indicating whether the button is invalid.
 * @returns {JSX.Element} - A JSX element representing the button.
 */
export default function SubmitFullButton({ text, isInvalid = false }) {
  const baseStyle = `
    w-full px-8 py-3 
    font-semibold rounded-md 
    dark:text-gray-50
  `;

  const dynamicStyle = isInvalid
    ? "dark:bg-blue-600 opacity-70 cursor-not-allowed"
    : "dark:bg-blue-600 hover:opacity-70 active:opacity-55";

  const buttonClassNames = `${baseStyle} ${dynamicStyle}`;

  return (
    <button
      disabled={isInvalid}
      type="button"
      className={buttonClassNames}
      aria-disabled={isInvalid}
    >
      {text}
    </button>
  );
}

SubmitFullButton.propTypes = {
  isInvalid: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
