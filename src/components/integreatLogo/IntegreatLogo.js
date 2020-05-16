import React from "react";
import Link from "../link/Link";
import Logo from "../../assets/images/integreat-app-logo.png";
import StyledLogo from "./integrateLogo.style";

export default function IntegreatLogo({ style }) {
  return (
    <Link to="/" className={style}>
      <StyledLogo width="403" height="110" src={Logo} alt="Logo" />
    </Link>
  );
}
