import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "../../Link";
const useStyles = makeStyles({
  root: {
    verticalAlign: "top",
    padding: "1rem",
    display: "inline-block",
    textAlign: "center",
    "&:hover": {
      background: "#F5F5F5"
    },
    color: "black",
    height: "200px"
  },
  body: {
    width: "252px"
  }
});

export default function Feature(props) {
  const { root, body } = useStyles();
  const { icon, header, text, link } = props.feature;
  return (
    <Link to={link} className={root} underline="none">
      {icon}
      <Typography variant="h6">{header}</Typography>
      <Typography className={body} variant="body1">
        {text}
      </Typography>
    </Link>
  );
}
