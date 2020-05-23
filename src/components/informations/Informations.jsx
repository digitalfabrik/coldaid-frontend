import React from "react";
import { makeStyles } from '@material-ui/core'

import MapIcon from "@material-ui/icons/Map";
import ViewListIcon from "@material-ui/icons/ViewList";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

import { useTranslation } from "react-i18next";

import Feature from "../feature/Feature";
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

const Informations = () => {
  const { t } = useTranslation();
  const { featureContainer, root, icon } = useStyles();

  const informations = [
    {
      icon: <AirportShuttleIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("legalInformationNavigationText"),
      text: t("kaeltebus_feature_text"),
      link: APP_ROUTES.legalInformation
    },
    {
      icon: <InfoOutlinedIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("healthRelatedInformationNavigationText"),
      text: t("info_feature_text"),
      link: APP_ROUTES.healthRelatedInformation
    },
    {
      icon: <InfoOutlinedIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("adviceInformationNavigationText"),
      text: t("info_feature_text"),
      link: APP_ROUTES.adviceInformation
    }
  ]

  return (
    <>
      <ContentHeadline>
        {t("home.headline")}
      </ContentHeadline>

      <div className={featureContainer}>
        {informations.map((feature, idx) => {
          return <Feature key={idx} feature={feature} />;
        })}
      </div>
    </>
  );
}

export default Informations
