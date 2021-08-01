/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, EffectCallback, useEffect } from 'react';

const useDebouncedEffect = (
  effect: EffectCallback,
  deps: DependencyList,
  delay?: number,
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay ?? 300);

    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};

export default useDebouncedEffect;
