import { memo } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ContentDisplay from '@components/Content/ContentDisplay';
import bgColor from '@default/bgColor';

import ViewDetailsContent from './components/ViewDetailsContent';
import DescriptionBox from './components/DescriptionBox';
import CommentSection from './components/CommentSection';

function ViewContent({ details }) {
  const { state } = useLocation();
  const { docData } = state;

  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3 rounded">
      <div className={`h-72 mb-2 ${bgColor}`}>
        <ContentDisplay docData={docData} />
      </div>

      <ViewDetailsContent />
      <DescriptionBox />
      <CommentSection details={details} />
    </article>
  );
}

const ViewContentMemo = memo(ViewContent);
export default ViewContentMemo;
ViewContent.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
