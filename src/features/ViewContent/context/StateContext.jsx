import { useLocation } from 'react-router-dom';

import linkStateContext from './linkStateContext';

// eslint-disable-next-line react/prop-types
export default function ContextProviderReducer({ children }) {
  const { state } = useLocation();
  const StateContenxt = linkStateContext.Provider;

  return (
    <StateContenxt value={state}>
      {children}
    </StateContenxt>
  );
}
