import PropTypes from "prop-types";

export default function ConfirmationMessage({ accountCreated, message }) {
  return (
    accountCreated && (
      <h1 className="text-xl text-green-500 text-center">{message}</h1>
    )
  );
}

ConfirmationMessage.propTypes = {
  message: PropTypes.string.isRequired,
  accountCreated: PropTypes.bool.isRequired,
};
