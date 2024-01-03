import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FolderInfo from './components/Folder/FolderInfo';
import FolderArea from './components/Folder/FolderArea';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
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
      <Navbar />
      <FolderInfo />
      <FolderArea />
      <Footer />
    </>
  );
}
