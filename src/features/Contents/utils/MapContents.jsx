import PropTypes from 'prop-types';
import ContentComponents from '../components/ContentComponents';

export default function MapContents({ contentsData }) {
  const displayContents = contentsData?.map((doc, idx) => (
    <ContentComponents
      // eslint-disable-next-line react/no-array-index-key
      key={idx}
      doc={doc.data()}
    />
  ));

  return displayContents;
}

MapContents.propTypes = {
  contentsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
