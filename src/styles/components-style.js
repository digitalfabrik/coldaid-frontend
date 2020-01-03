import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

/* Styles for Navbar */

const StyledNavbar = styled(AppBar)`
  background-color: #fff;
  box-shadow: 0px 2px 3px 0px rgba(204, 204, 204, 0.75);
`;
const StyledLogo = styled.img`
  width: auto;
  max-height: 58px;
  padding: 5px;
`;

/* End of Navbar */

/*  Styles for Landing Page */

const StyledDescription = styled(Typography)`
  text-align: center;
  font: 16px "Courier New";
`;

/* END of Landing Page */
export { StyledNavbar, StyledLogo, StyledDescription };
