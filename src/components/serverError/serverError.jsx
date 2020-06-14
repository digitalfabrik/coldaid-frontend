import React from 'react'
import { useTranslation } from 'react-i18next'
import { Hidden, makeStyles } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 100,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontWeight: '300',
    },
  },
  icon: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
    fontSize: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      fontSize: theme.spacing(10),
    },
  },
}))

const ServerError = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.wrapper}>
      <ErrorOutlineIcon className={classes.icon}/>

      <Hidden smDown>
        <Typography variant={'h3'} className={classes.header}>
          {t('serverError.headline')}
        </Typography>
      </Hidden>

      <Hidden mdUp>
        <Typography variant={'h4'} className={classes.header}>
          {t('serverError.headline')}
        </Typography>
      </Hidden>

      <Typography variant={'body1'}>
        {t('serverError.description')}
      </Typography>
    </div>
  )

}

export default ServerError
