import PropTypes from "prop-types";

/**
 * A functional component that renders a prompt with a link to an external URL.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.url - The URL to navigate to when the link is clicked.
 * @param {string} [props.message] - An optional message to display before the link.
 * @param {string} [props.linkText] - The text to display for the link.
 * @returns {JSX.Element} - The rendered AuthPrompt component.
 */
const AuthPrompt = ({ url, message, linkText }) => (
  <p className="px-6 text-sm text-center dark:text-gray-600 cursor-default">
    {message}
    <a
      rel="noopener noreferrer"
      href={url}
      className="pl-1 hover:underline dark:text-blue-600"
    >
      {linkText}
    </a>
  </p>
);

AuthPrompt.propTypes = {
  url: PropTypes.string.isRequired,
  message: PropTypes.string,
  linkText: PropTypes.string,
};

export default AuthPrompt;
