import PropTypes from 'prop-types';
import DetailsContent from './DetailsContent';

export default function ContentComponents({ content, details }) {
  const isImg = typeof content === 'string';

  const displayContent = isImg
    ? <img src={content} alt="content" />
    : <div>content.text</div>;

  return (
    <article>
      {displayContent}
      <DetailsContent details={details} />
    </article>
  );
}

ContentComponents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
