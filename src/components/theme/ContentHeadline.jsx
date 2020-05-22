import React from 'react'
import { Hidden, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headline: {
    margin: `${theme.spacing(6)}px auto ${theme.spacing(6)}px`,
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(4)}px auto`,
    },
    fontWeight: 100
  }
}))

const ContentHeadline = props => {
  const classes = useStyles()

  return (
    <>
      <Hidden smDown>
        <Typography className={classes.headline} variant={"h2"} align="center">
          {props.children}
        </Typography>
      </Hidden>

      <Hidden mdUp>
        <Typography className={classes.headline} variant={"h4"} component={"h2"} align="center">
          {props.children}
        </Typography>
      </Hidden>
    </>
  )
}

export default ContentHeadline
