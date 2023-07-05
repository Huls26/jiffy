import { createContext } from 'react';
import Routes from '@routes';

const dataContext = createContext();
const ContextProvider = dataContext.Provider;
const sampleData = {
  id: '123testing',
  username: 'alvinTheChipmunks',
};

function App() {
  return (
    <ContextProvider value={sampleData}>
      <Routes />
    </ContextProvider>
  );
}

export default App;
export { dataContext };
