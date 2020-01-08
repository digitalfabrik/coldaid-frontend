import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "20% 20% 60%",
    gridTemplateRows: "50px auto",
    textAlign: "center"
  },
  title: {
    gridColumn: "1 / 3",
    gridRow: "1/2",
    padding: "1rem",
    fontSize: "26px"
  },
  content: {
    gridColumn: "1 / 3",
    gridRow: "2/3",
    padding: "5.5rem",
    fontSize: "26px"
  },
  img: {
    gridColumn: "3 / 4",
    gridRow: "1/3",
    height: "350px",
    width: "725px",
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
