import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  styling: {
    whiteSpace: 'pre-wrap',
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    '& h1': {
      fontSize: '3.75rem',
      lineHeight: '1.2',
      letterSpacing: '-0.00833em',
      textAlign: 'left',
      margin: theme.spacing(0, 0, 4),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0, 0, 2),
        fontSize: '2.125rem',
        lineHeight: '1.235',
        letterSpacing: '0.00735em',
      },
      fontWeight: 100,
    },
    '& h2': {
      fontSize: '1.25rem',
      fontWeight: 300,
      lineHeight: '1.6',
      letterSpacing: '0.0075em',
    },
    '& strong': {
      fontWeight: 400,
    },
    '& a': {
      color: theme.palette.primary.main,
    },
    '& p': {
      whiteSpace: 'pre-wrap',
    },
  },
}))

function CmsStylingContainer(props) {
  const classes = useStyles()

  return (
    <div className={`${classes.styling} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default CmsStylingContainer
