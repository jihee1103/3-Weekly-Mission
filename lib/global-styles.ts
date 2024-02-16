import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
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
