import PropTypes from 'prop-types';

import ViewDetailsContent from './components/ViewDetailsContent';
import DescriptionBox from './components/DescriptionBox';
import CommentSection from './components/CommentSection';

export default function ViewContent({ content, details }) {
  const isImg = typeof content === 'string';

  const displayContent = isImg
    ? (
      <img
        src={content}
        alt="content"
        className="
                  w-full h-full
                  object-cover
                "
      />
    )
    : <div>content.text</div>;

  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3 rounded">
      <div className="h-72 mb-2">
        {displayContent}
      </div>

      <ViewDetailsContent details={details} />
      <DescriptionBox />
      <CommentSection details={details} />
    </article>
  );
}

ViewContent.propTypes = {
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
