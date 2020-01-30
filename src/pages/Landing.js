import React from "react";
// import Description from "../components/landingpage/Description";
import Features from "../components/landingpage/feature/Features";
import { StyledLandingContainer } from "../styles/pages-style";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppCarousel from "../components/landingpage/carousel/AppCarousel";
import Description from "../components/landingpage/Description";

export default function Landing() {
  return (
    <StyledLandingContainer>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <AppCarousel />
        </Grid>
        <Grid item xs={12}>
          <Description />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>
      </Grid>
    </StyledLandingContainer>
  );
}
