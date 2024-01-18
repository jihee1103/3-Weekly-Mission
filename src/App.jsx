import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Folder from './components/Folder/Folder';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Shared from './components/Shared/Shared';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shared',
        element: <Shared />,
      },
      {
        path: 'folder',
        element: <Folder />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

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
  button {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
