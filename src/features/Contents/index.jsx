import PropTypes from 'prop-types';
import MapContents from './components/MapContents';

export default function Contents({ querySnapshot }) {
  console.log('render Contents');
  return (
    <section>
      <MapContents contentsData={querySnapshot} />
    </section>
  );
}

Contents.propTypes = {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  querySnapshot: PropTypes.arrayOf(PropTypes.object),
};
