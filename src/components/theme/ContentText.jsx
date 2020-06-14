import React from 'react'
import { Typography } from '@material-ui/core'

const ContentText = props => {
  return (
    <Typography component='div'>
      {props.children}
    </Typography>
  )
}

export default ContentText
