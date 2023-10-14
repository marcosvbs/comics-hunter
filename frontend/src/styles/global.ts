import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.white};
  }

  h1 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1.375rem;
    font-weight: 700;
  }

  body,
  input,
  textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button,
  a {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }

  strong {
    color: ${(props) => props.theme["blue-400"]};
  }

`;
