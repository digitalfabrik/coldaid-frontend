import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headline: {
    margin: `${theme.spacing(8)}px auto`,
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(4)}px auto`,
    },
    fontWeight: 100
  }
}))

const ContentHeadline = props => {
  const classes = useStyles()

  return (
    <Typography className={classes.headline} variant={"h2"} align="center">
      {props.children}
    </Typography>
  )
}

export default ContentHeadline
