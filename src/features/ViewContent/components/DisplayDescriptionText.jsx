import { useState } from 'react';
import PropTypes from 'prop-types';

export default function DisplayDescriptionText({ docData }) {
  const [showMore, setShowMore] = useState(() => ({
    btn: false,
  }));
  const longWord = 54;
  const isLongWord = docData.description.length >= longWord;

  // reduce the length of description text
  const descView = showMore.btn
    ? docData.description
    : `${docData.description.slice(0, longWord)}`;

  function handleShowMore() {
    setShowMore((prevValue) => ({
      ...prevValue,
      btn: !prevValue.btn,
    }));
  }
  return (
    <p className="font-semibold">
      {/* check description text length and slice max length word */}
      {
          descView.length >= 900
            ? `${docData.description.slice(0, 900)}...`
            : descView
        }
      {/* add '...' in the end */}
      {(isLongWord && !showMore.btn) && '...'}
      {/* display and hide button */}
      {isLongWord && (
      <button className="block mt-2 hover:text-orange" type="button" onClick={handleShowMore}>
        show
        {' '}
        {showMore.btn ? 'less' : 'more'}
        {' '}
      </button>
      )}
    </p>
  );
}

DisplayDescriptionText.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  docData: PropTypes.object.isRequired,
};
