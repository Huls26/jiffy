import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ContentTextDisplay from '@components/Content/ContentTextDisplay';
import ViewDetailsContent from './components/ViewDetailsContent';
import DescriptionBox from './components/DescriptionBox';
import CommentSection from './components/CommentSection';

export default function ViewContent({ details }) {
  const { state } = useLocation();
  const { content, textContent } = state.docData;
  // const isImg = typeof content === 'string';

  console.log(state);
  const displayContent = content
    ? (
      <img
        src={content}
        alt=""
        className="
                  w-full h-full
                  object-cover
                "
      />
    )
    : <ContentTextDisplay textContent={textContent} />;

  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3 rounded">
      <div className="h-72 mb-2 bg-gradient-to-r from-blue via-purple to-pink">
        {displayContent}
      </div>

      <ViewDetailsContent details={details} />
      <DescriptionBox />
      <CommentSection details={details} />
    </article>
  );
}

ViewContent.propTypes = {
  // content: PropTypes.oneOfType([
  //   PropTypes.object.isRequired,
  //   PropTypes.string.isRequired,
  // ]).isRequired,
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
