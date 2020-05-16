import React from "react";
// import Description from "../components/landingpage/Description";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid
} from "@material-ui/core";

import Features from "../components/feature/Features";
import AppCarousel from "../components/carousel/AppCarousel";
import Description from "../components/description/Description";

export default function Home() {
  return (
    <>
      <AppCarousel />
      <Container maxWidth="lg">
        <CssBaseline />
        <Box my={4} px={4}>
          <Description />
        </Box>

        <Divider variant={'middle'} />

        <Grid item xs={12}>
          <Features />
        </Grid>
      </Container>
    </>
  );
}
