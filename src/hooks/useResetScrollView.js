import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useResetScrollView(ADependency) {
  const location = useLocation();
  const arrayDependency = ADependency || location;

  // reset scroll view
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [arrayDependency]);
}
