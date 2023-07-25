import { lazy, Suspense } from 'react';

const Router = lazy(() => import('@router'));
const ContextProviderReducer = lazy(() => import('@context/components/ContextProviderReducer'));

// to do:
// fix loading components
function App() {
  return (
    <Suspense fallback={<h1>...Loading</h1>}>
      <ContextProviderReducer>
        <Router />
      </ContextProviderReducer>
    </Suspense>
  );
}

export default App;
