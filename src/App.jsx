import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Shared from './components/Shared/Shared';
import Home from './components/Home/Home';
import Folder from './components/Folder/Folder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shared',
    element: <Shared />,
  },
  {
    path: '/folder',
    element: <Folder />,
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    font-family: Pretendard;
  }
  body {
    font-size: 16px;
    font-weight: 400;
    font-family: Pretendard;
  }
  a {
    text-decoration: none;
  }
  p {
    padding: 0;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
