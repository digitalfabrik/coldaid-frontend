import React from "react";
import Link from "./Link";
import Logo from "../assets/images/integreat-app-logo.png";
import { StyledLogo } from "../styles/components-style";

export default function IntegreatLogo({ style }) {
  return (
    <Link to="/" className={style}>
      <StyledLogo width="403" height="110" src={Logo} alt="Logo" />
    </Link>
  );
}
