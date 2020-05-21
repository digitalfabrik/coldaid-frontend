import React from 'react'
import clsx from 'clsx'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  contentLimiter: {
    overflow: 'hidden',
    height: 'auto'
  },
  withBoxShadow: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);',
  },
  toolbar: theme.mixins.toolbar
}))

const ContentLimiter = (props) => {
  const { className } = props

  const classes = useStyles()

  return (
    <Container
      className={clsx(
        className,
        classes.contentLimiter,
        {
          [classes.withBoxShadow]: props.withBoxShadow
        })}
      maxWidth={'lg'}>
      {props.children}
    </Container>
  )
}

export default ContentLimiter
