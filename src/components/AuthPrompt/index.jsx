import PropTypes from "prop-types";

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
  className: PropTypes.string,
  linkClassName: PropTypes.string,
};

export default AuthPrompt;
