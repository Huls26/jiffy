import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CreatePostBtn({ onClick }) {
  return (
    <Link to="/createpost">
      <button
        onClick={onClick}
        type="button"
        className="
      bg-aqua-1
        font-A text-sm
        p-1
        font-extrabold
        rounded-full
        border-dark-2
        border
        border-b-2
        border-r-2
        hover:opacity-80
        active:bg-aqua-2
      "
      >
        ➕
      </button>
    </Link>
  );
}

CreatePostBtn.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};
