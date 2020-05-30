import React from 'react'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: '600px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: theme.spacing(4),
    borderRadius: 0,
    borderBottomStyle: 'solid',
    borderBottomWidth: '3px',
    borderBottomColor: theme.palette.primary.main,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '400px',
      borderBottomWidth: '2px',
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      height: '300px',
      padding: theme.spacing(2),
    },
  },
  action: {
    maxWidth: '600px',
    padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    },
  },
  actionText: {
    fontWeight: 600,
    whiteSpace: 'normal',
  },
}))

export default function CarouselItem(props) {
  const classes = useStyles()
  const { infoText, src, alt, to } = props.item
  return (
    <Paper className={classes.paper} style={{ backgroundImage: `url(${src})` }} alt={alt}>
      <MenuItem component={Link} to={to} className={classes.action}>
        <Typography color='secondary' className={classes.actionText}>{infoText}</Typography>
      </MenuItem>
    </Paper>
  )
}
