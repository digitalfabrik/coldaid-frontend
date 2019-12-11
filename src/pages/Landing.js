import React from "react";
import { Paper, CssBaseline, Box, Container } from "@material-ui/core";
import Description from "../components/Landingpage/Description";
import Features from "../components/Landingpage/Features";

export default function Landing() {
  return (
    <Box>
      <CssBaseline />
      <Container>
        <Paper>
          <Description />
        </Paper>
      </Container>
      {/* <Paper> */}
      <Features />
      {/* </Paper> */}
    </Box>
  );
}
