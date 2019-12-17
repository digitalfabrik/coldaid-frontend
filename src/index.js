import React from "react";
import ReactDOM from "react-dom";
import App from "././components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import './i18n';

const theme = createMuiTheme();

ReactDOM.render(
  <Router>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </Router>,
  document.getElementById("root")
);
