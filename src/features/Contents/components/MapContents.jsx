import PropTypes from 'prop-types';
import ContentComponents from './ContentComponents';
import ContentDataProvider from '../context';

export default function MapContents({ contentsData }) {
  const displayContents = contentsData?.map((doc) => (
    <ContentDataProvider
      key={doc.id}
      value={{ docData: doc.data(), contentId: doc.id }}
    >
      <ContentComponents />
    </ContentDataProvider>
  ));

  return displayContents;
}

MapContents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contentsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
