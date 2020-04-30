import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #101a24;
    --color-text: #fff;
    --color-primary: #FFCE44;
    --color-pink: #F4CEDF;

    --font: futura-pt, sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font);
    font-size: 1.8rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
