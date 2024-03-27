import PropTypes from 'prop-types';
import style from '../style/createPostTextArea';

export default function CreatePostTextArea({ file, handleChange }) {
  return (
    <section className="px-4 py-2 bg-primary-1 rounded-t-lg">
      <textarea maxLength="252" value={file.textContent} onChange={handleChange} name="textContent" id="textContent" rows="4" className={style().textAreaStyle} placeholder={file.imgFile ? `${file.imgFileValue} \n- Post Image` : 'Write Something...'} disabled={file.isLoading} />
    </section>
  );
}

CreatePostTextArea.propTypes = {
  file: PropTypes.shape({
    textContent: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    imgFile: PropTypes.any,
    imgFileValue: PropTypes.string,
    isLoading: PropTypes.bool,

  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
