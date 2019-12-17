import React from "react";
import { StyledNavbar } from "../../styles/components-style";
import IntegreatLogo from "../IntegreatLogo";

export default function NavigationBar() {
  return (
    <React.Fragment>
      <StyledNavbar color="default" position="static">
        <IntegreatLogo />
      </StyledNavbar>
    </React.Fragment>
  );
}
