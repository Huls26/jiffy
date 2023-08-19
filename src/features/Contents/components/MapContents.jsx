import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import ContentComponents from './ContentComponents';
import ContentDataProvider from '../context';
import '../style/mapContents.css';

// set a react-window for pagination
export default function MapContents({ contentsData }) {
  const contentsLength = contentsData.length;
  const content = ({ data, index, style }) => {
    const jiffyContent = data[index];

    return (
      <ContentDataProvider
        value={{ docData: jiffyContent.data(), contentId: jiffyContent.id }}
      >
        <ContentComponents style={style} />
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
            style={{ 'overflow-x': 'hidden' }}
            itemData={contentsData}
            className="List"
            height={height - 18}
            width={width}
            itemCount={contentsLength}
            itemSize={405}
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
