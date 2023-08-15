import { useRef } from 'react';

export default function useCounts() {
  const renderCount = useRef(0);
  const incrementCount = renderCount.current + 1;

  return (
    incrementCount
  );
}
