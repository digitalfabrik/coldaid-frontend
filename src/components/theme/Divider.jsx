import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  divider: {
    margin: props => `${theme.spacing(props.marginSize === 'small' ? 4 : 8)}px auto`,
    [theme.breakpoints.down('sm')]: {
      margin: props => `${theme.spacing(props.marginSize === 'small' ? 2 : 4)}px auto`,
    },
    width: '100%',
    maxWidth: props => `${props.maxWidth}%`,
    height: props => `${props.thickness}px`,
    backgroundColor: theme.palette.primary.main,
    border: 0
  }
}))

const Divider = props => {
  const classes = useStyles(props)

  return (
    <hr className={classes.divider}/>
  )
}

export default Divider
