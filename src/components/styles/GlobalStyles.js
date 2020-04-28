import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #ffc600;
    --font: sofia-pro, sans-serif;
  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font);
    font-size: 1.8rem;
  }
`

export default GlobalStyles
