import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #portal {
    position: fixed;
    top: 0;
    z-index: 1;
  }
`;

export default GlobalStyle;
