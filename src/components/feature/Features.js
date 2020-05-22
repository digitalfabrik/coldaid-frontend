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
      header: t("map_feature_header"),
      text: t("map_feature_text"),
      link: APP_ROUTES.map
    },
    {
      icon: <ViewListIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("view_feature_header"),
      text: t("view_feature_text"),
      link: APP_ROUTES.shelterOverview
    },
    {
      icon: <DirectionsBusIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("kaeltebus_feature_header"),
      text: t("kaeltebus_feature_text"),
      link: APP_ROUTES.kaeltebus
    }
  ]
  const information = [
    {
      icon: <AirportShuttleIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("kaeltebus_feature_header"),
      text: t("kaeltebus_feature_text"),
      link: "/kaeltebus_login"
    },
    {
      icon: <InfoOutlinedIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("info_feature_header"),
      text: t("info_feature_text"),
      link: "/needed?"
    }
  ]

  return (
    <>
      <ContentHeadline>
        {t("features_header")}
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
