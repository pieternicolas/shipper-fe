import { lazy, Suspense } from 'react';
import { css, Global } from '@emotion/react';

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

      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </>
  );
};

export default App;
