import React from "react";
import { landingPageStyle } from "../styles/pages-style";
import {
  Typography,
  StylesProvider,
  Paper,
  CssBaseline,
  Container
} from "@material-ui/core";

export default function Landing() {
  console.log(landingPageStyle());
  const { root } = landingPageStyle();
  return (
    <Container className={root}>
      <CssBaseline />
      <Paper>
        <Typography variant="headline" component="h3">
          Our Content.
        </Typography>
      </Paper>
    </Container>
  );
}
