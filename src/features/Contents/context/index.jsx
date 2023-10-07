/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { useContext, useReducer } from 'react';

import { dataContext } from '@context/dataContext';

import contentDataContext from './contentDataContext';
import reducerMethod from '../utils/userReducer';

// this context is use in @features/Contents/components/MapContents.jsx
// export default ContentDataProvider;
export default function ContentDataProvider({ docData, contentId, children }) {
  // getting user data/User id
  const [userContext] = useContext(dataContext);
  const { userId } = userContext;

  // setting post data to state
  // updating post data
  const [userState, dispatch] = useReducer(reducerMethod, { ...docData });
  const ContentDataP = contentDataContext.Provider;

  return (
    <ContentDataP
      value={{
        docData, contentId, userState, dispatch, userId,
      }}
    >
      {children}
    </ContentDataP>
  );
}

ContentDataProvider.propTypes = {
  docData: PropTypes.object.isRequired,
  contentId: PropTypes.string.isRequired,
  children: PropTypes.any,
};
