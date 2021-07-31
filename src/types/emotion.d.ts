import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      white: string;
      black: string;
      gray: string;
      background: string;
    };
  }
}
