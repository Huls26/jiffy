import { createContext } from 'react';

const dataContext = createContext();
const ContextProvider = dataContext.Provider;

export default ContextProvider;
export { dataContext };
