import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'unistore/react'

import ContentLimiter from '../../components/theme/ContentLimiter'
import ContentText from '../../components/theme/ContentText'
import ServerError from '../../components/serverError/serverError'

import { loadAdviceInformation } from '../../store/actions'
import { resetRequest } from '../../store/loadData'
import { storeKeys } from '../../store/store'
import PageHeadline from '../../components/theme/PageHeadline'
import CmsStylingContainer from '../../components/cmsStylingContainer/cmsStylingContainer'


function AdviceInformation(props) {
  const { adviceInformation, language, loadAdviceInformation } = props
  const { t } = useTranslation()

  useEffect(() => {
    loadAdviceInformation()
  }, [loadAdviceInformation, language])

  useEffect(() => {
    return () => resetRequest(storeKeys.adviceInformation)
  }, [])

  const displayDate = () => {
    if (adviceInformation.data && adviceInformation.data.modified_gmt) {
      return <ContentText>{t('informationPages.last_changed')} {new Date(adviceInformation.data.modified_gmt).toLocaleDateString()}</ContentText>
    } else {
      return null
    }
  }

  return (
    <ContentLimiter withBoxShadow>
      {
        adviceInformation.data && !adviceInformation.loadingError ?
          <>
            <PageHeadline>
              {adviceInformation.data.title}
            </PageHeadline>
            <CmsStylingContainer>{adviceInformation.data.content}</CmsStylingContainer>
            {displayDate()}
          </>
          :
          adviceInformation.loadingError ?
            <ServerError/>
            :
            <div></div>
      }
    </ContentLimiter>
  )
}

const mapStateToProps = [storeKeys.adviceInformation, storeKeys.language]
const actions = {
  loadAdviceInformation,
}

export default connect(mapStateToProps, actions)(AdviceInformation)
