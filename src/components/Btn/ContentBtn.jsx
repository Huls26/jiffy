/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import contenBtnStyle from './styles/contentBtnStyle';

export default function ContentBtn({
  text, bg, onClick, type,
}) {
  const bgCol = bg || 'bg-yellow-1';

  return (
    <button
      onClick={onClick}
      type={!type ? 'button' : 'submit'}
      className={contenBtnStyle(bgCol).btnStyle}
    >
      {text}
    </button>
  );
}

ContentBtn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.any.isRequired,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
