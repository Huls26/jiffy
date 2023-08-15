import { useSearchParams } from 'react-router-dom';

export default function useHandleSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSetSearchParams(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    { searchParams, setSearchParams, handleSetSearchParams }
  );
}
