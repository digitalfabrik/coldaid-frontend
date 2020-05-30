import React from "react";
import { makeStyles } from '@material-ui/core'

import MapIcon from "@material-ui/icons/Map";
import ViewListIcon from "@material-ui/icons/ViewList";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

import { useTranslation } from "react-i18next";

import Feature from "./Feature";
import { APP_ROUTES } from '../app/App'
import ContentHeadline from '../theme/ContentHeadline.jsx'

const useStyles = makeStyles({
  featureContainer: {
    textAlign: "center"
  },
  icon: {
    height: "64px",
    width: "64px"
  }
});

const Features = () => {
  const { t } = useTranslation();
  const { featureContainer, root, icon } = useStyles();

  const features = [
    {
      icon: <MapIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("home.featuresSection.map.headline"),
      text: t("home.featuresSection.map.description"),
      link: APP_ROUTES.map
    },
    {
      icon: <ViewListIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("home.featuresSection.shelterOverview.headline"),
      text: t("home.featuresSection.shelterOverview.description"),
      link: APP_ROUTES.shelterOverview
    },
    {
      icon: <DirectionsBusIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("home.featuresSection.kaeltebus.headline"),
      text: t("home.featuresSection.map.description"),
      link: APP_ROUTES.kaeltebus
    }
  ]

  return (
    <>
      <ContentHeadline>
        {t("home.featuresSection.headline")}
      </ContentHeadline>

      <div className={featureContainer}>
        {features.map((feature, idx) => {
          return <Feature key={idx} feature={feature} />;
        })}
      </div>
    </>
  );
}

export default Features
