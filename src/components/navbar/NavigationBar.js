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
  logo: { flexGrow: 1 },
  picker: {
    zIndex: 999,
    "&:hover": {
      background: "#F5F5F5"
    }
  }
});

export default function NavigationBar() {
  const { root, logo, picker } = useStyles();
  return (
    <StyledNavbar className={root} color="default" position="static">
      <IntegreatLogo style={logo} />
      <LanguagePicker style={picker} />
    </StyledNavbar>
  );
}
