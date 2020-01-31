import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { useTranslation } from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LandingPageWelcomeImage from "../../../assets/images/landing_page_welcome_home_alt.png";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles({
  root: {
    marginTop: "3px",
    zIndex: -99
  }
});

export default function AppCarousel() {
  var { t: translation } = useTranslation();
  const { root } = useStyles();
  var items = [
    {
      id: 0,
      header: translation("welcome_header"),
      text: translation("welcome_text"),
      src: LandingPageWelcomeImage,
      alt: "Image1"
    },
    {
      id: 1,
      header: translation("header2"),
      text: translation("text2"),
      src:
        "https://image.freepik.com/free-vector/background-fireworks-new-year_23-2148370606.jpg",
      alt: "Image2"
    },
    {
      id: 2,
      header: translation("header3"),
      text: translation("text3"),
      src: "https://clipartart.com/images/clipart-lands-department-maps-5.png",
      alt: "Image3"
    }
  ];
  return (
    <Carousel
      className={root}
      autoPlay={true}
      interval={10000}
      animation={"slide"}
    >
      {items.map(item => {
        return <CarouselItem key={item.id} item={item} />;
      })}
    </Carousel>
  );
}
