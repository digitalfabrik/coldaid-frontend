import React from "react";
import { StyledNavbar } from "../../styles/components-style";
import IntegreatLogo from "../IntegreatLogo";
import LanguagePicker from "./LanguagePicker";

import { makeStyles } from "@material-ui/core";
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
