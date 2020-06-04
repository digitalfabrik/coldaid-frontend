import React, { useEffect } from 'react'
import { connect } from "unistore/react";
import { useTranslation } from "react-i18next";

import ContentLimiter from '../../components/theme/ContentLimiter'
import ContentText from "../../components/theme/ContentText";
import ServerError from "../../components/serverError/serverError";

import { loadHealthRelatedInformation } from "../../store/actions";

function HealthRelatedInformation(props) {
  const { healthRelatedInformation, loadHealthRelatedInformation } = props;
  const { t } = useTranslation();

  useEffect(() => {
    loadHealthRelatedInformation()
  }, [loadHealthRelatedInformation])

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
        healthRelatedInformation.data ?
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

const mapStateToProps = ['healthRelatedInformation']
const actions = {
  loadHealthRelatedInformation
}

export default connect(mapStateToProps, actions)(HealthRelatedInformation)



