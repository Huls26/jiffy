import PropTypes from 'prop-types';
import useHandleSearchParams from '@hooks/useHandleSearchParams';

import ContentComponents from './ContentComponents';
import ContentDataProvider from '../context';
import filterContent from '../utils/filterContent';

export default function MapContents({ contentsData }) {
  const { searchParams } = useHandleSearchParams();
  const displayContents = contentsData?.reduce((contents, doc) => {
    const c = (
      <ContentDataProvider
        key={doc.id}
        value={{ docData: doc.data(), contentId: doc.id }}
      >
        <ContentComponents />
      </ContentDataProvider>
    );

    const newArray = filterContent(contents, doc, searchParams, c);

    return newArray;
  }, []);

  return displayContents;
}

MapContents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contentsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
