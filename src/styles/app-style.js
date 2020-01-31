import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Times New Roman", Times, serif;
    font-size: 1rem;
    font-weight:bold;
    background-color:"#FFFFFF";
    overflow-x:hidden;
  }
`;

export default GlobalStyles;
