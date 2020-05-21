import React from 'react'
import { Box, Hidden, Typography } from '@material-ui/core'

const ContentText = props => {
  return (
    <>
      <Hidden smDown>
        <Box my={4} px={4}>
          <Typography>
            { props.children }
          </Typography>
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box my={4} px={1}>
          <Typography>
            { props.children }
          </Typography>
        </Box>
      </Hidden>
    </>
  )
}

export default ContentText
