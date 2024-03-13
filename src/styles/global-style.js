import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #aaf67F;
    --background-color: rgb(212, 251, 191, 0.7);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`