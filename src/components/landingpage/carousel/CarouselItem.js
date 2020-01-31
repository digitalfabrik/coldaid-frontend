import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "45vw 55vw",
    gridTemplateRows: "225px 250px",
    textAlign: "center",
    height: "475px"
  },
  title: {
    gridColumn: "1 / 2",
    gridRow: "1/2",
    padding: "1rem",
    fontSize: "26px",
    alignSelf: "flex-end"
  },
  content: {
    gridColumn: "1 / 2",
    alignSelf: "flex-start",
    gridRow: "2/3",
    padding: "1rem",
    fontSize: "26px"
  },
  img: {
    gridColumn: "2 / 3",
    gridRow: "1/3",
    height: "475px",
    width: "55vw",
    justifySelf: "end"
  }
});

export default function CarouselItem(props) {
  const { header, text, src, alt } = props.item;
  const { root, title, img, content } = useStyles();
  return (
    <Paper className={root}>
      <h2 className={title}>{header}</h2>
      <Typography className={content} component={"h2"}>
        {text}
      </Typography>
      <img className={img} src={src} alt={alt}></img>
    </Paper>
  );
}
