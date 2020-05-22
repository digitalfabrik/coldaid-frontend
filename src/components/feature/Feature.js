import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "../link/Link";
const useStyles = makeStyles(theme => ({
  root: {
    verticalAlign: "top",
    padding: "1rem",
    display: "inline-block",
    textAlign: "center",
    "&:hover": {
      background: "#F5F5F5"
    },
    color: "black",
  },
  header: {
    margin: `${theme.spacing(1)}px`,
    fontWeight: 300,
  },
  body: {
    maxWidth: "250px",
    padding: "0.5rem",
    fontWeight: 300
  }
}))

export default function Feature(props) {
  const classes = useStyles();
  const { icon, header, text, link } = props.feature;
  return (
    <Link to={link} className={classes.root} underline="none">
      {icon}
      <Typography variant="h6" className={classes.header}>{header}</Typography>
      <Typography className={classes.body} variant="body2">
        {text}
      </Typography>
    </Link>
  );
}
