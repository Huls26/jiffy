import PropTypes from 'prop-types';
import DisplayContent from './DisplayContent';
import DetailsContent from './DetailsContent';

export default function ContentComponents({ doc }) {
  const { content, textDetails } = doc;

  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3">
      <DisplayContent content={content} textDetails={textDetails} />
      <DetailsContent details={doc} />
    </article>
  );
}

ContentComponents.propTypes = {
  doc: PropTypes.shape({
    content: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.string.isRequired,
    ]),
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string,
  }).isRequired,
};
