/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import MapContents from './components/MapContents';

// add npm react-window for pagination
export default function Contents({ querySnapshot }) {
  console.log('render Contents');
  return (
    <section>
      <MapContents contentsData={querySnapshot} />
    </section>
  );
}

Contents.propTypes = {
  querySnapshot: PropTypes.arrayOf(PropTypes.object),
};
