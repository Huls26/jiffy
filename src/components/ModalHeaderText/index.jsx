import PropTypes from "prop-types";

export default function ModalHeaderText({ title, body }) {
  return (
    <header className="mb-8 text-center cursor-not-allowed">
      <h1 className="my-3 text-4xl font-bold">{title}</h1>
      <p className="text-sm dark:text-gray-600">{body}</p>
    </header>
  );
}

ModalHeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
