import PropTypes from 'prop-types';
import MapContents from './components/MapContents';

export default function Contents({ querySnapshot }) {
  return (
    <section>
      <MapContents contentsData={querySnapshot} />
    </section>
  );
}

Contents.propTypes = {
  querySnapshot: PropTypes.arrayOf(PropTypes.object).isRequired,
};
