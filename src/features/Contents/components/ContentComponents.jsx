import PropTypes from 'prop-types';
import DetailsContent from './DetailsContent';

export default function ContentComponents({ doc }) {
  const { content } = doc;
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
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3">
      <div className="h-72 mb-2">
        {displayContent}
      </div>
      <DetailsContent details={doc} />
    </article>
  );
}

ContentComponents.propTypes = {
  // content: PropTypes.oneOfType([
  //   PropTypes.object.isRequired,
  //   PropTypes.string.isRequired,
  // ]).isRequired,
  // eslint-disable-next-line react/require-default-props
  doc: PropTypes.shape({
    content: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    userImg: PropTypes.string,
    username: PropTypes.string,
    textDetails: PropTypes.string,
  }),
};
