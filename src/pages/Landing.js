import React from "react";
import { Paper, CssBaseline, Container } from "@material-ui/core";
import Description from "../components/Landingpage/Description";
import Features from "../components/Landingpage/Features";
import { StyledLandingContainer } from "../styles/pages-style";

export default function Landing() {
  return (
    <StyledLandingContainer>
      <CssBaseline />
      <Container>
        <Paper>
          <Description />
        </Paper>
      </Container>
      {/* <Paper> */}
      <Features />
      {/* </Paper> */}
    </StyledLandingContainer>
  );
}
