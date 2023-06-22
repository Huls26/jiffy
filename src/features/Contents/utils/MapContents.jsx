import PropTypes from 'prop-types';
import ContentComponents from '../components/ContentComponents';

export default function MapContents({ contentsData, contentImg }) {
  const displayContents = contentsData.map((content, idx) => (
    <ContentComponents
      // eslint-disable-next-line react/no-array-index-key
      key={idx}
      content={contentImg}
      details={content}
    />
  ));

  return displayContents;
}

MapContents.propTypes = {
  contentsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  contentImg: PropTypes.string.isRequired,
};
