import React from "react";
import {
  CssBaseline,
} from "@material-ui/core";

import Features from "../components/feature/Features";
import Informations from '../components/informations/Informations'
import AppCarousel from "../components/carousel/AppCarousel";
import Description from "../components/description/Description";
import ContentLimiter from '../components/theme/ContentLimiter'
import Divider from '../components/theme/Divider.jsx'

export default function Home() {
  return (
    <>
      <AppCarousel />
      <ContentLimiter withBoxShadow>
        <CssBaseline />

        <Description />

        <Divider thickness={2} maxWidth={65} />

        <Features />

        <Divider thickness={2} maxWidth={65} />

        <Informations />
      </ContentLimiter>
    </>
  );
}
