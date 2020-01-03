import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { useTranslation } from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles({
  root: {
    marginTop: "3px"
  }
});
export default function AppCarousel() {
  var { t } = useTranslation();
  const { root } = useStyles();
  var items = [
    {
      header: t("header1"),
      text: t("text1"),
      src:
        "http://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg",
      alt: "Image1"
    },
    {
      header: t("header2"),
      text: t("text2"),
      src:
        "https://image.freepik.com/free-vector/background-fireworks-new-year_23-2148370606.jpg",
      alt: "Image2"
    },
    {
      header: t("header3"),
      text: t("text3"),
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
        return <CarouselItem item={item} />;
      })}
    </Carousel>
  );
}
