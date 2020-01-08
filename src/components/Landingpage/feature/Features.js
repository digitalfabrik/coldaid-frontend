import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MapIcon from "@material-ui/icons/Map";
import ViewListIcon from "@material-ui/icons/ViewList";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Feature from "./Feature";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    padding: "1rem"
  },
  featureContainer: {
    textAlign: "center"
  },
  icon: {
    height: "64px",
    width: "64px"
  }
});

export default function Features() {
  var { t: translation } = useTranslation();
  const { featureContainer, root, icon } = useStyles();
  var features = [
    {
      icon: <MapIcon className={icon} />,
      header: translation("map_feature_header"),
      text: translation("map_feature_text"),
      link: "/map"
    },
    {
      icon: <ViewListIcon className={icon} />,
      header: translation("view_feature_header"),
      text: translation("view_feature_text"),
      link: "/find_shelters"
    },
    {
      icon: <ContactPhoneIcon className={icon} />,
      header: translation("kaeltebus_feature_header"),
      text: translation("kaeltebus_feature_text"),
      link: "/page4"
    },
    {
      icon: <AirportShuttleIcon className={icon} />,
      header: translation("kaeltebus_feature_header"),
      text: translation("kaeltebus_feature_text"),
      link: "/page4"
    },
    {
      icon: <InfoOutlinedIcon className={icon} />,
      header: translation("info_feature_header"),
      text: translation("info_feature_text"),
      link: "/help"
    }
  ];
  return (
    <div className={root}>
      <Typography variant={"h5"} align="center">
        {translation("features_header")}
      </Typography>
      <Divider variant="middle" />
      <div className={featureContainer}>
        {features.map(feature => {
          return <Feature feature={feature} />;
        })}
      </div>
    </div>
  );
}
