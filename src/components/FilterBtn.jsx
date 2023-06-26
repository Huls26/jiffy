import PropTypes from 'prop-types';

export default function FilterBtn({ text }) {
  return (
    <button
      className="
        bg-yellow-1
        font-A text-sm font-bold
        px-2 py-1
        rounded
        border-dark-2
        border
        border-b-2
        border-r-2
        capitalize
        hover:opacity-80
        active:bg-yellow-2
      "
      type="button"
    >
      {text}

    </button>
  );
}

FilterBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
