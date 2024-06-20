/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { memo } from 'react';
import { areEqual } from 'react-window';
import { Link } from 'react-router-dom';
import MapContents from './components/MapContents';

// import contentStyle from './style/ContentsStyle';

function Contents({ querySnapshot }) {
  const isValidList = querySnapshot.length;

  return (
    <section>
      {
        isValidList
          ? <MapContents contentsData={querySnapshot} />
          : (
            <Link to="/createpost">
              <h1 className="
                  font-A font-bold
                  text-lg text-center text-gray-dark
                  hover:opacity-80
                  active:text-purple
                "
              >
                No Posts Available.
              </h1>
            </Link>
          )
      }
    </section>
  );
}

const memoContentsComponents = memo(Contents, areEqual);
export default memoContentsComponents;

Contents.propTypes = {
  querySnapshot: PropTypes.arrayOf(PropTypes.object),
};
