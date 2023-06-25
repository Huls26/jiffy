import PropTypes from 'prop-types';

export default function ContentBtn({ text, bg }) {
  const bgColor = bg || 'bg-yellow-1';
  return (
    <button
      type="button"
      className={`
        ${bgColor} px-3 py-1
        font-A font-bold text-sm 
        grow-0 basis-0
        border-dark-2
        border border-b-2 border-r-2 rounded
        capitalize
        hover:opacity-80
        active:bg-green
      `}
    >
      {text}
    </button>
  );
}

ContentBtn.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
