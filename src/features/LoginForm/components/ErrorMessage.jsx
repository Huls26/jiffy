import PropTypes from "prop-types";

export default function ErrorMessage({ isError }) {
  return (
    isError && (
      <h1 className="text-xl text-red-500 text-center">
        Try again check email and password
      </h1>
    )
  );
}

ErrorMessage.propTypes = {
  isError: PropTypes.bool.isRequired,
};
