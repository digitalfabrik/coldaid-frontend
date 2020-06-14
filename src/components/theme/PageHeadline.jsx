import React from 'react'
import { Hidden, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headline: {
    textAlign: 'left',
    margin: theme.spacing(0,0,4),
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(4)}px auto`,
    },
    fontWeight: 100
  }
}))

const PageHeadline = props => {
  const classes = useStyles()

  return (
    <>
      <Hidden smDown>
        <Typography className={classes.headline} variant={"h2"} component={"h1"} align="center">
          {props.children}
        </Typography>
      </Hidden>

      <Hidden mdUp>
        <Typography className={classes.headline} variant={"h4"} component={"h1"} align="center">
          {props.children}
        </Typography>
      </Hidden>
    </>
  )
}

export default PageHeadline
