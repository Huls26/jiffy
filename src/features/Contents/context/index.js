import { createContext } from 'react';

// this context is use in @features/Contents/components/MapContents.jsx
export const contentDataContext = createContext();
const ContentDataProvider = contentDataContext.Provider;

export default ContentDataProvider;
