import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { router } from '@routes/Router';

import { Modal, ModalProvider } from '@components/provider/modal';

import { GlobalStyle } from './style/globalStyle';
import { palette } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={palette}>
      <GlobalStyle />
      <ModalProvider>
        <RouterProvider router={router} />
        <Modal />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
