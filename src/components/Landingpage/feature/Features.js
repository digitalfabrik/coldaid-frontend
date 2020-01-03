import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MapIcon from "@material-ui/icons/Map";
import ViewListIcon from "@material-ui/icons/ViewList";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Feature from "./Feature";

const useStyles = makeStyles({
  root: {
    padding: "1rem"
  },
  featureContainer: {
    top: "0px",
    textAlign: "center"
  },
  icon: {
    height: "64px",
    width: "64px",
    top: "0px"
  }
});

export default function Features() {
  const { featureContainer, root, icon } = useStyles();
  var features = [
    {
      icon: <MapIcon className={icon} />,
      header: "Map",
      text: "Search for a shelter on a map.",
      link: "/map"
    },
    {
      icon: <ViewListIcon className={icon} />,
      header: "View",
      text: "Search for a shelter on a list.",
      link: "/find_shelters"
    },
    {
      icon: <AirportShuttleIcon className={icon} />,
      header: "Kältebus",
      text: "Find the closest Bus.",
      link: "/page4"
    },
    {
      icon: <InfoOutlinedIcon className={icon} />,
      header: "More Information",
      text: "More Information about the project and how you can contribute.",
      link: "/help"
    }
  ];
  return (
    <div className={root}>
      <Typography variant={"h5"} align="center">
        Discover our Features
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
