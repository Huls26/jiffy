import useUserReducer from '@hooks/useUserReducer';
import ContextProvider from '@context/dataContext';

// eslint-disable-next-line react/prop-types
export default function ContextProviderReducer({ children }) {
  const [detailsState, dispatch] = useUserReducer();

  return (
    <ContextProvider value={[detailsState, dispatch]}>
      {children}
    </ContextProvider>
  );
}
