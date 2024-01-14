import { RouterProvider } from 'react-router-dom';

import { router } from '@routes/Router';
import GlobalStyle from 'style/globalStyle';
import { palette } from 'style/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={palette}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
