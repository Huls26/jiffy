import { PropTypes } from 'prop-types';

export default function MainPagePostCardBtn({ className, onClick, ariaLabel, likesCount = '', textContent }) {
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
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  likesCount: PropTypes.number,
  textContent: PropTypes.string.isRequired,
}