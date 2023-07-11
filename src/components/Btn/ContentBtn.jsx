import PropTypes from 'prop-types';

export default function ContentBtn({
  text, bg, onClick, type,
}) {
  const bgColor = bg || 'bg-yellow-1';

  return (
    <button
      onClick={onClick}
      type={!type ? 'button' : 'submit'}
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
  // eslint-disable-next-line react/require-default-props
  bg: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
};
