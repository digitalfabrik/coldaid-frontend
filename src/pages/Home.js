import React from "react";
// import Description from "../components/landingpage/Description";
import Features from "../components/feature/Features";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppCarousel from "../components/carousel/AppCarousel";
import Description from "../components/description/Description";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
