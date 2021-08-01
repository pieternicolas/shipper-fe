import { useState } from 'react';

import { Breakpoints } from 'config/styles';

import useDebouncedEffect from './useDebouncedEffect';

const getDeviceConfig = (width: number): boolean => {
  if (width < Breakpoints.Desktop) {
    return true;
  } else {
    return false;
  }
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<boolean>(() =>
    getDeviceConfig(window.innerWidth),
  );

  useDebouncedEffect(() => {
    const calcInnerWidth = (): void =>
      setBreakpoint(getDeviceConfig(window.innerWidth));

    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
