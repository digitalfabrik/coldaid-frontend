import React from 'react'
import { Link, makeStyles } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import ContentLimiter from '../theme/ContentLimiter'

import { APP_ROUTES } from '../app/App'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
    minHeight: '60px',
    borderTop: '2px solid',
    borderColor: theme.palette.primary.main,
    backgroundColor: '#ffffff',
  },
  footerLimiter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  links: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    padding: '10px'
  }
}))

const Footer = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <footer className={classes.footer}>
      <ContentLimiter footer>
        <div className={classes.footerLimiter}>
          <div className={classes.links}>
            <Link
              className={classes.link}
              color="inherit"
              variant="body2"
              component={RouterLink}
              to={APP_ROUTES.contact}>
                {t('contact.navigationLabel')}
            </Link>
          </div>

          <div className={classes.links}>
            <Link
              className={classes.link}
              color="inherit"
              variant="body2"
              component={RouterLink}
              to={APP_ROUTES.imprint}>
                {t('imprint.navigationLabel')}
            </Link>

            <Link
              className={classes.link}
              color="inherit"
              variant="body2"
              component={RouterLink}
              to={APP_ROUTES.privacy}>
                {t('privacy.navigationLabel')}
            </Link>
          </div>
        </div>
      </ContentLimiter>
    </footer>
  )
}

export default Footer
