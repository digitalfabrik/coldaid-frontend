import React from "react";
import IntegreatLogo from "../integreateLogo/IntegreatLogo";
import LanguagePicker from "./LanguagePicker";

import { makeStyles } from "@material-ui/core";
import StyledNavbar from "./navigation.style";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: { flexGrow: 1 }
});

export default function NavigationBar() {
  const { root, logo } = useStyles();
  return (
    <StyledNavbar className={root} color="default" position="static">
      <IntegreatLogo style={logo} />
      <LanguagePicker />
    </StyledNavbar>
  );
}
