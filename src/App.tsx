import { lazy, Suspense } from 'react';
import { css, Global, ThemeProvider } from '@emotion/react';

import baseTheme from 'config/styles';

const Home = lazy(() => import('pages/Home'));

const App = () => {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      />

      <ThemeProvider theme={baseTheme}>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
