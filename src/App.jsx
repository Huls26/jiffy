import { lazy, Suspense } from 'react';

import LoadingApp from '@/components/Loading/LoadingApp';

const Router = lazy(() => import('@/router'));
const ContextProviderReducer = lazy(() => import('@/context/components/ContextProviderReducer'));

// to do:
// fix loading components
function App() {
  return (
    <Suspense fallback={<LoadingApp />}>
      <ContextProviderReducer>
        <Router />
      </ContextProviderReducer>
    </Suspense>
  );
}

export default App;
