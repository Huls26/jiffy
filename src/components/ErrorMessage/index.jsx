import PropTypes from "prop-types";

export default function ErrorMessage({ isError, message }) {
  return (
    isError && <h1 className="text-xl text-red-500 text-center">{message}</h1>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};
