import PropTypes from 'prop-types';
import style from '../style/createPostBtnStyles';

export default function CancelFileBtn({ onClick, file }) {
  const xBtn = (
    <label htmlFor="cancelFile" className="flex">
      <h1 className={style().cancelFileBtnStyle}>
        x
      </h1>
      <input type="button" onClick={onClick} name="cancelFile" id="cancelFile" hidden />
    </label>
  );

  return (file.fileName && xBtn);
}

CancelFileBtn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
