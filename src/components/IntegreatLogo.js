import React from "react";
import Link from "./Link";
import Logo from "../assets/images/integreat-app-logo.png";
import { StyledLogo } from "../styles/components-style";

export default function IntegreatLogo() {
  return (
    <Link to="/">
      <StyledLogo width="403" height="110" src={Logo} alt="Logo" />
    </Link>
  );
}
