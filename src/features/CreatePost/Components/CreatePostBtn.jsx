import PropTypes from 'prop-types';
import style from '../style/createPostBtnStyles';

export default function CreatePostBtn({ file }) {
  return (
    <button type="submit" className={style().createPostBtnStyle} disabled={file.isLoading}>
      Create Post
    </button>
  );
}

CreatePostBtn.propTypes = {
  file: PropTypes.shape({
    isLoading: PropTypes.bool,
  }).isRequired,
};
