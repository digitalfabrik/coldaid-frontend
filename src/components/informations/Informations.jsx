import React from 'react'
import { makeStyles } from '@material-ui/core'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import HelpIcon from '@material-ui/icons/Help'

import { useTranslation } from 'react-i18next'

import Feature from '../feature/Feature'
import { APP_ROUTES } from '../app/App'
import ContentHeadline from '../theme/ContentHeadline.jsx'

const useStyles = makeStyles({
  featureContainer: {
    textAlign: 'center',
  },
  icon: {
    height: '64px',
    width: '64px',
  },
})

const Informations = () => {
  const { t } = useTranslation()
  const { featureContainer, icon } = useStyles()

  const informations = [
    {
      icon: <AccountBalanceIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon}/>,
      header: t('home.informationsSection.legal.headline'),
      text: t('home.informationsSection.legal.description'),
      link: APP_ROUTES.legalInformation,
    },
    {
      icon: <LocalHospitalIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon}/>,
      header: t('home.informationsSection.health.headline'),
      text: t('home.informationsSection.health.description'),
      link: APP_ROUTES.healthRelatedInformation,
    },
    {
      icon: <HelpIcon htmlColor={'rgba(0,0,0,0.7)'} className={icon}/>,
      header: t('home.informationsSection.advice.headline'),
      text: t('home.informationsSection.advice.description'),
      link: APP_ROUTES.adviceInformation,
    },
  ]

  return (
    <>
      <ContentHeadline>
        {t('home.informationsSection.headline')}
      </ContentHeadline>

      <div className={featureContainer}>
        {informations.map((feature, idx) => {
          return <Feature key={idx} feature={feature}/>
        })}
      </div>
    </>
  )
}

export default Informations
