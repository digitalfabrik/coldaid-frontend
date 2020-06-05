import React, { useEffect } from 'react'
import { connect } from 'unistore/react'
import { useTranslation } from 'react-i18next'

import ContentLimiter from '../../components/theme/ContentLimiter'
import ContentText from '../../components/theme/ContentText'
import ServerError from '../../components/serverError/serverError'

import { loadLegalInformation } from '../../store/actions'
import { resetRequest } from '../../store/loadData'
import { storeKeys } from '../../store/store'

function LegalInformation(props) {
  const { legalInformation, language, loadLegalInformation } = props
  const { t } = useTranslation()

  useEffect(() => {
    loadLegalInformation()
  }, [loadLegalInformation, language])

  useEffect(() => {
    return () => resetRequest(storeKeys.legalInformation)
  }, [])

  const displayDate = () => {
    if (legalInformation.data && legalInformation.data.modified_gmt) {
      return <ContentText>{t('informationPages.last_changed')} {new Date(legalInformation.data.modified_gmt).toLocaleDateString()}</ContentText>
    } else {
      return null
    }
  }


  return (
    <ContentLimiter withBoxShadow>
      {
        legalInformation.data && !legalInformation.loadingError ?
          <>
            <h1 style={{ textAlign: 'center' }}>{legalInformation.data.title}</h1>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              <ContentText>{legalInformation.data.content}</ContentText>
            </div>
            {displayDate()}
          </>
          :
          legalInformation.loadingError ?
            <ServerError/>
            :
            <div></div>
      }
    </ContentLimiter>
  )
}

const mapStateToProps = [storeKeys.legalInformation, storeKeys.language]
const actions = {
  loadLegalInformation,
}

export default connect(mapStateToProps, actions)(LegalInformation)

