import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Pretendard;
    font-style: normal;
    line-height: normal;
  }
  a {
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Footer />
    </>
  );
}
