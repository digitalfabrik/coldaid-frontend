import React from 'react'
import clsx from 'clsx'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  contentLimiter: {
    overflow: 'hidden',
    padding: theme.spacing(4, 6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  withBoxShadow: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);',
  },
  footer: {
    padding: theme.spacing(0, 2),
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}))

const ContentLimiter = props => {
  const classes = useStyles()

  return (
    <Container
      className={clsx(
        classes.contentLimiter,
        classes.grow,
        {
          [classes.withBoxShadow]: props.withBoxShadow,
          [classes.footer]: props.footer,
        })}
      maxWidth={'lg'}>
      {props.children}
    </Container>
  )
}

export default ContentLimiter
