import PropTypes from 'prop-types';
import style from '../style/cancelFileBtnStyle';

export default function CancelFileBtn({ onClick }) {
  return (
    <label htmlFor="cancelFile" className="flex">
      <h1 className={style().headingStyle}>
        x
      </h1>
      <input type="button" onClick={onClick} name="cancelFile" id="cancelFile" hidden />
    </label>
  );
}

CancelFileBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
