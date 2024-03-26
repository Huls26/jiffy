import PropTypes from 'prop-types';
import style from '../style/createPostTitleInputStyles';

export default function CreatePostTitleInput({ file, handleChange }) {
  return (
    <section className={style().containerStyle}>
      <input
        value={file.title}
        onChange={handleChange}
        type="text"
        id="title"
        name="title"
        className={style().inputStyle}
        placeholder="Write Title (optional)"
        maxLength="27"
        disabled={file.isLoading}
      />
    </section>
  );
}

CreatePostTitleInput.propTypes = {
  file: PropTypes.shape({
    title: PropTypes.string,
    isLoading: PropTypes.bool,

  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
