import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
    padding-top: 40px;
    padding-right: 16px;
    padding-left: 16px;
  };
  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  };
  img {
    display: block;
    max-width: 100%;
    height: auto;
  };
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;