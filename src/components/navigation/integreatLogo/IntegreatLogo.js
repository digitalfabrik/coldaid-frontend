import React from 'react'
import Logo from '../../../assets/images/integreat-app-logo.png'
import { makeStyles } from '@material-ui/core'
import { APP_ROUTES } from '../../app/App'
import Link from '@material-ui/core/Link'

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

export default function IntegreatLogo() {
  const classes = useStyles()
  return (
    <Link to={APP_ROUTES.home} className={classes.link}>
      <img src={Logo} alt="integreat logo" className={classes.logo}/>
    </Link>
  )
}
