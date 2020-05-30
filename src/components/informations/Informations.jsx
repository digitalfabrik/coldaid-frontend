import React from "react";
import { makeStyles } from '@material-ui/core'

import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import HealingIcon from '@material-ui/icons/Healing'
import AssistantIcon from '@material-ui/icons/Assistant'

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
      header: t("home.informationsSection.legal.headline"),
      text: t("home.informationsSection.legal.description"),
      link: APP_ROUTES.legalInformation
    },
    {
      icon: <HealingIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("home.informationsSection.health.headline"),
      text: t("home.informationsSection.health.description"),
      link: APP_ROUTES.healthRelatedInformation
    },
    {
      icon: <AssistantIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon} />,
      header: t("home.informationsSection.advice.headline"),
      text: t("home.informationsSection.advice.description"),
      link: APP_ROUTES.adviceInformation
    }
  ]

  return (
    <>
      <ContentHeadline>
        {t("home.informationsSection.headline")}
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
