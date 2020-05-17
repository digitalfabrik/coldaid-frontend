import React from 'react'
import Link from '../../link/Link'
import Logo from '../../../assets/images/integreat-app-logo.png'
import { makeStyles } from '@material-ui/core'
import { APP_ROUTES } from '../../app/App'

const useStyles = makeStyles({
  link: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
})

export default function IntegreatLogo() {
  const classes = useStyles()
  return (
    <Link to={APP_ROUTES.home} className={classes.link}>
      <img src={Logo} alt="integreat logo" height="42px"/>
    </Link>
  )
}
