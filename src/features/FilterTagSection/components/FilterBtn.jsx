import PropTypes from 'prop-types';
import style from '../style/filterBtnStyle';

export default function FilterBtn({ text }) {
  return (
    <button
      className={style().btnStyle}
      type="button"
    >
      {text}
    </button>
  );
}

FilterBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
