import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  styling: {
    fontWeight: 300,
    '& a': {
      color: theme.palette.primary.main,
    },
  },
}))

function CmsStylingContainer(props) {
  const classes = useStyles()

  return (
    <div className={classes.styling}>
      {props.children}
    </div>
  )
}

export default CmsStylingContainer
