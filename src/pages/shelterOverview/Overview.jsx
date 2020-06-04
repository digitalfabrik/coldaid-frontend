import React from 'react'
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import ContentLimiter from '../../components/theme/ContentLimiter'
import PageHeadline from '../../components/theme/PageHeadline'
import FindShelters from './FindShelters.js'

const Overview = () => {
  const { t } = useTranslation()

  return (
    <ContentLimiter withBoxShadow>
      <PageHeadline>{t('overview.pageHeadline')}</PageHeadline>

      <TextField
        variant="outlined"
        label="Name der Unterkunft"
        placeholder="Notübernachtung Lehrter Straße"
        type="search"/>


      {/* <FindShelters/> */}
    </ContentLimiter>
  )
}

export default Overview
