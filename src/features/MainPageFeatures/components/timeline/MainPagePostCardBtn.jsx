import { PropTypes } from 'prop-types';
import buttonStyle from '../../utils/timeline/buttonStyle';

export default function MainPagePostCardBtn({ isActive, onClick, ariaLabel, likesCount = '', textContent }) {
  const className = buttonStyle(isActive);

  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {likesCount} {textContent}
    </button>
  )
}

MainPagePostCardBtn.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  likesCount: PropTypes.number,
  textContent: PropTypes.string.isRequired,
}