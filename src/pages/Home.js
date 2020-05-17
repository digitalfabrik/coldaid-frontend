import React from "react";
// import Description from "../components/landingpage/Description";
import { Container, CssBaseline, Grid } from "@material-ui/core";

import Features from "../components/feature/Features";
import AppCarousel from "../components/carousel/AppCarousel";
import Description from "../components/description/Description";

export default function Home() {
  return (
    <>
      {/*<AppCarousel />*/}
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid item xs={12}>
          <Description />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>
      </Container>
    </>
  );
}
