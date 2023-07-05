import PropTypes from 'prop-types';
import ContentComponents from '../components/ContentComponents';

export default function MapContents({ contentsData }) {
  const displayContents = contentsData?.map((doc) => (
    <ContentComponents
      key={doc.id}
      doc={doc.data()}
    />
  ));

  return displayContents;
}

MapContents.propTypes = {
  contentsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
