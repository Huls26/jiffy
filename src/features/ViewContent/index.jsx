import {
  memo, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import ContentDisplay from '@components/Content/ContentDisplay';
import bgColor from '@defaultSetting/bgColor';
// eslint-disable-next-line max-len
// import linkStateContext from '@features/ViewContent/context/linkStateContext';

import ViewDetailsContent from './components/ViewDetailsContent';
import DescriptionBox from './components/DescriptionBox';
import CommentSection from './components/CommentSection';

// clean up
function ViewContent({ details }) {
  const { state } = useLocation();
  // add localStorage to store and retrieve data in state link
  const navigate = useNavigate();
  const [stateLocation, setStateLocation] = useState(() => ({ ...state }));
  const { docData } = stateLocation;
  const bGC = bgColor;

  useEffect(() => {
    if (!docData) {
      navigate('/');
    }
  }, [docData, navigate]);

  useEffect(() => {
    if (state) {
      setStateLocation(() => ({ ...state }));
    }
  }, [state]);

  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3 rounded">
      <div className={`h-72 mb-2 ${bGC}`}>
        {docData && <ContentDisplay docData={docData} />}
      </div>

      {docData && <ViewDetailsContent stateLocation={stateLocation} />}
      {docData && <DescriptionBox docData={docData} />}
      <CommentSection details={details} />
    </article>
  );
}

const ViewContentMemo = memo(ViewContent);
export default ViewContentMemo;

ViewContent.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string,
    username: PropTypes.string,
    textDetails: PropTypes.string,
  }).isRequired,
};
