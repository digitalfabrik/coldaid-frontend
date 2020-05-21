import React from 'react'
import Logo from '../../../assets/images/integreat-app-logo.png'
import { makeStyles } from '@material-ui/core'
import { APP_ROUTES } from '../../app/App'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      height: 36,
    },
    [theme.breakpoints.up('sm')]: {
      height: 42,
    },
  },
}))

export default function IntegreatLogo(props) {
  const classes = useStyles()
  return (
    <MenuItem component={Link} to={APP_ROUTES.home} className={classes.link} {...props}>
      <img src={Logo} alt="integreat logo" className={classes.logo}/>
    </MenuItem>
  )
}
