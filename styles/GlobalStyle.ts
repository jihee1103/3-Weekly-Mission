import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  font-family: "Pretendard";
}

html,
body {
  font-size: 62.5%;
}

:root {
  --primary: #6d6afe;
  --red: #ff5b56;
  --black: #111322;
  --white: #ffffff;
  --purple-70: #8f00ff;

  --gray100: #373740;
  --gray60: #9fa6b2;
  --gray20: #ccd5e3;
  --gray10: #e7effb;

  --background: #f0f6ff;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
