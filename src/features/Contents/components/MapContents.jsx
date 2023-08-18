import PropTypes from 'prop-types';
// import useHandleSearchParams from '@hooks/useHandleSearchParams';

import ContentComponents from './ContentComponents';
import ContentDataProvider from '../context';
// import filterContent from '../utils/filterContent';

// replace map with react-window for pagination
// clean up
export default function MapContents({ contentsData }) {
  // const { searchParams } = useHandleSearchParams();
  // const displayContents = contentsData?.reduce((contents, doc) => {
  //   const c = (
  //     <ContentDataProvider
  //       key={doc.id}
  //       value={{ docData: doc.data(), contentId: doc.id }}
  //     >
  //       <ContentComponents />
  //     </ContentDataProvider>
  //   );

  //   const newArray = filterContent(contents, doc, searchParams, c);

  //   return newArray;
  // }, []);
  const displayContents = contentsData?.map((content) => {
    const c = (
      <ContentDataProvider
        key={content.id}
        value={{ docData: content.data(), contentId: content.id }}
      >
        <ContentComponents />
      </ContentDataProvider>
    );

    return c;
  });

  return displayContents;
}

MapContents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contentsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
