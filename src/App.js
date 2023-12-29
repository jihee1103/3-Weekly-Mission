import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FolderInfo from "./components/FolderInfo";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Pretendard, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: normal;
  }
  a {
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FolderInfo />
      <Footer />
    </>
  );
}
