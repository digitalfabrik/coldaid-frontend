import styled, { css } from "styled-components";
import { AppBar, Typography, Grid } from "@material-ui/core";
import { AccessibilityNew, Map } from "@material-ui/icons";

/* Styles for Navbar */

const StyledNavbar = styled(AppBar)``;
const StyledLogo = styled.img`
  width: auto;
  max-height: 58px;
  padding: 5px;
`;

/* End of Navbar */

/*  Styles for Landing Page */

const StyledDescription = styled(Typography)`
  font: 16px "Courier New";
`;

// Styles for Feature Container

const featureButtonStyle = css`
  color: white;
  text-align: center;
  width: 128px;
  height: 128px;
  min-width: 64px;
  min-height: 64px;
  :hover {
    background-color: white;
    color: #333;
  }
`;

const StyledMapIcon = styled(Map)`
  ${featureButtonStyle}
`;
const StyledAccessibilityNewIcon = styled(AccessibilityNew)`
  ${featureButtonStyle}
`;
const StyledHeader = styled.div`
  color: white;
  font-size: 26px;
  grid-column-start: 1;
  grid-column-end: 3;
`;
const StyledFeature = styled.div`
  border: 2px solid white;
  width: 128px;
  height: 128px;
  min-width: 64px;
  min-height: 64px;
`;

// END of Feature Container
/* END of Landing Page */
export {
  StyledNavbar,
  StyledLogo,
  StyledDescription,
  StyledMapIcon,
  StyledAccessibilityNewIcon,
  StyledFeature,
  StyledHeader
};
