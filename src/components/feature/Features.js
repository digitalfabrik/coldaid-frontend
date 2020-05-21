import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MapIcon from "@material-ui/icons/Map";
import ViewListIcon from "@material-ui/icons/ViewList";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Feature from "./Feature";
import { useTranslation } from "react-i18next";
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
      id: 0,
      icon: <MapIcon className={icon} />,
      header: t("map_feature_header"),
      text: t("map_feature_text"),
      link: APP_ROUTES.map
    },
    {
      id: 1,
      icon: <ViewListIcon className={icon} />,
      header: t("view_feature_header"),
      text: t("view_feature_text"),
      link: APP_ROUTES.shelterOverview
    },
    {
      id: 2,
      icon: <ContactPhoneIcon className={icon} />,
      header: t("kaeltebus_feature_header"),
      text: t("kaeltebus_feature_text"),
      link: APP_ROUTES.kaeltebus
    }
  ]
  const information = [
    {
      id: 3,
      icon: <AirportShuttleIcon className={icon} />,
      header: t("kaeltebus_feature_header"),
      text: t("kaeltebus_feature_text"),
      link: "/kaeltebus_login"
    },
    {
      id: 4,
      icon: <InfoOutlinedIcon className={icon} />,
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
        {features.map(feature => {
          return <Feature key={feature.id} feature={feature} />;
        })}
      </div>
    </>
  );
}

export default Features
