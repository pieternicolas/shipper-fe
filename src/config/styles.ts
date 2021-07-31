import { Interpolation, Theme } from '@emotion/react';

export type StylesObj<T extends string> = Record<
  T,
  Interpolation<Theme> | ((theme: Theme) => Interpolation<Theme>)
>;

export type StylesFunc<T extends string, Props extends object = {}> = (
  theme: Theme,
  props?: Props,
) => StylesObj<T>;

export enum Breakpoints {
  Desktop = 768,
}

export const bpDesktop = `@media only screen and (min-width: ${Breakpoints.Desktop}px)`;

const baseTheme = {
  color: {
    primary: '#ef4941',
    white: '#ffffff',
    black: '#202020',
    gray: '#808080',
    background: '#f7f7f7',
  },
};

export default baseTheme;
