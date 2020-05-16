import React from "react";
import IntegreatLogo from "../integreatLogo/IntegreatLogo";
import LanguagePicker from "./LanguagePicker";

import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
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
    <AppBar className={root} color="secondary" position="static">
      <IntegreatLogo style={logo} />
      <LanguagePicker />
    </AppBar>
  );
}
