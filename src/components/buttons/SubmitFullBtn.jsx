import PropTypes from "prop-types";

/**
 * A React functional component that renders a full-width button with custom styles.
 *
 * @function SubmitFullButton
 * @param {object} props - The component's props.
 * @param {string} props.text - The text to be displayed on the button.
 * @returns {JSX.Element} - A JSX element representing the button.
 */
export default function SubmitFullButton({ text, isInvalid = false }) {
  // to be update in the future
  const validStyle = `
        w-full px-8 py-3 
        font-semibold rounded-md 
        dark:text-gray-50 dark:bg-blue-600 
        hover:opacity-70 active:opacity-55
      `;
  const invalidStyle = `
          w-full px-8 py-3 
          font-semibold rounded-md 
          dark:text-gray-50 dark:bg-blue-600 
          opacity-70 cursor-no-drop
        `;
  const styles = !isInvalid ? validStyle : invalidStyle;

  return (
    <button disabled={isInvalid} type="button" className={styles}>
      {text}
    </button>
  );
}

SubmitFullButton.propTypes = {
  isInvalid: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
