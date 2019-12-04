import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
  }
`;

export default GlobalStyles;
