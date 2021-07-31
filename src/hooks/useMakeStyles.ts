import { useTheme, Theme } from '@emotion/react';
import { StylesFunc } from 'config/styles';

const useMakeStyles = <
  Props extends object = {},
  ClassKeys extends string = string,
>(
  styles: StylesFunc<ClassKeys, Props>,
  props?: Props,
) => {
  const baseTheme: Theme = useTheme();

  return styles(baseTheme, props);
};

export default useMakeStyles;
