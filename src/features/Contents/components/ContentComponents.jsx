/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';
import DisplayContent from './DisplayContent';
import DetailsContent from './DetailsContent';

// hover:contrast-150
// hover:brightness-150
// hover:backdrop-contrast-50 transition-all ease-in-out
export default function ContentComponents({ style }) {
  const inlineStyle = style || {};

  return (
    <article style={inlineStyle} className="border-dark-2 border border-b-2 border-r-2 pb-3 md:rounded-lg shadow-lg">
      <DisplayContent />
      <DetailsContent />
    </article>
  );
}

ContentComponents.propTypes = {
  style: PropTypes.object,
};
