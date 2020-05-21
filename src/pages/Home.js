import React from "react";
import {
  Box,
  CssBaseline,
  Grid
} from "@material-ui/core";

import Features from "../components/feature/Features";
import AppCarousel from "../components/carousel/AppCarousel";
import Description from "../components/description/Description";
import ContentLimiter from '../components/theme/ContentLimiter.js'
import Divider from '../components/theme/Divider.jsx'

export default function Home() {
  return (
    <>
      <AppCarousel />
      <ContentLimiter withBoxShadow>
        <CssBaseline />
        <Box my={4} px={4}>
          <Description />
        </Box>

        <Divider thickness={2} maxWidth={65} />

        <Grid item xs={12}>
          <Features />
        </Grid>
      </ContentLimiter>
    </>
  );
}
