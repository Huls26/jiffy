import { useContext } from 'react';
import { contentDataContext } from '../context';

export default function DisplayContent() {
  const { doc } = useContext(contentDataContext);
  const { content, textDetails } = doc;
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
    : <div>{textDetails}</div>;

  return (
    <div className="h-72 mb-2">
      {displayContent}
    </div>
  );
}

// DisplayContent.propTypes = {
//   // eslint-disable-next-line react/require-default-props
//   content: PropTypes.string,
//   // eslint-disable-next-line react/require-default-props
//   textDetails: PropTypes.string,
// };
