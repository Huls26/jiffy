import Router from '@router';
import ContextProviderReducer from '@context/components/ContextProviderReducer';

// to do:
// clean up
// Header
function App() {
  return (
    <ContextProviderReducer>
      <Router />
    </ContextProviderReducer>
  );
}

export default App;
