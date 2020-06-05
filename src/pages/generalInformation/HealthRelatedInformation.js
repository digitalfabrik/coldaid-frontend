import React, { useEffect } from 'react'
import { connect } from "unistore/react";
import { useTranslation } from "react-i18next";

import ContentLimiter from '../../components/theme/ContentLimiter'
import ContentText from "../../components/theme/ContentText";
import ServerError from "../../components/serverError/serverError";

import { loadHealthRelatedInformation } from "../../store/actions";
import { resetRequest } from '../../store/loadData'
import { storeKeys } from '../../store/store'

function HealthRelatedInformation(props) {
  const { healthRelatedInformation, language, loadHealthRelatedInformation } = props;
  const { t } = useTranslation();

  useEffect(() => {
    loadHealthRelatedInformation()
  }, [loadHealthRelatedInformation, language])

  useEffect(() => {
    return () => resetRequest(storeKeys.healthRelatedInformation)
  }, [])

  const displayDate = () => {
    if (healthRelatedInformation.data && healthRelatedInformation.data.modified_gmt) {
      return <ContentText>{t("informationPages.last_changed")} {new Date(healthRelatedInformation.data.modified_gmt).toLocaleDateString()}</ContentText>
    } else {
      return null;
    }
  }

  return (
    <ContentLimiter withBoxShadow>
      {
        healthRelatedInformation.data && !healthRelatedInformation.loadingError ?
          <>
            <h1 style={{ textAlign: "center" }}>{healthRelatedInformation.data.title}</h1>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              <ContentText>{healthRelatedInformation.data.content}</ContentText>
            </div>
            {displayDate()}
          </>
          :
          healthRelatedInformation.loadingError ?
            <ServerError />
            :
            <div></div>
      }
    </ContentLimiter>
  )

}

const mapStateToProps = [storeKeys.healthRelatedInformation, storeKeys.language]
const actions = {
  loadHealthRelatedInformation
}

export default connect(mapStateToProps, actions)(HealthRelatedInformation)



