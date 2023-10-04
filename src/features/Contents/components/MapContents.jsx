import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import SkeletonMainPage from '@components/MainPage/SkeletonMainPage';
import ContentComponents from './ContentComponents';
import ContentDataProvider from '../context';
import '../style/mapContents.css';

// set a react-window for pagination
export default function MapContents({ contentsData }) {
  const contentsLength = contentsData.length;
  // content
  const content = ({
    data, index, style, isScrolling,
  }) => {
    const jiffyContent = data[index];
    // add gutter space
    const styleTop = style.top;
    // i like this code. Simply same as adding margin bottom
    const addSpace = styleTop + (18 * index);

    // render content and loading component when user scroll
    return (
      <ContentDataProvider
        value={{ docData: jiffyContent.data(), contentId: jiffyContent.id }}
      >
        {
        isScrolling
          ? <SkeletonMainPage style={{ ...style, top: addSpace }} />
          : (
            <ContentComponents
              style={{
                ...style,
                top: addSpace,
              }}
            />
          )
      }
      </ContentDataProvider>
    );
  };

  return (
    <section
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            style={{ overflowX: 'hidden' }}
            itemData={contentsData}
            className="List"
            height={height - 18}
            width={width}
            itemCount={contentsLength}
            itemSize={405}
            useIsScrolling
          >
            {content}
          </List>
        )}
      </AutoSizer>

    </section>
  );
}

MapContents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contentsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
