/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { createContext } from 'react';

// this context is use in @features/Contents/components/MapContents.jsx
const contentDataContext = createContext();
const ContentDataP = contentDataContext.Provider;

// export default ContentDataProvider;
export default function ContentDataProvider({ docData, contentId, children }) {
  // add the state here
  return (
    <ContentDataP
      value={{ docData, contentId }}
    >
      {children}
    </ContentDataP>
  );
}

export { contentDataContext };

ContentDataProvider.propTypes = {
  docData: PropTypes.object.isRequired,
  contentId: PropTypes.string.isRequired,
  children: PropTypes.any,
};
