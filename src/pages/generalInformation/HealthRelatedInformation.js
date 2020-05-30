import React, {useEffect} from 'react'
import ContentLimiter from '../../components/theme/ContentLimiter'
import {connect} from "unistore/react";
import {createResetErrorState, loadHealthRelatedInformation} from "../../store/actions";
import {useTranslation} from "react-i18next";
import ServerError from "../../components/serverError/serverError";
import ContentText from "../../components/theme/ContentText";


function HealthRelatedInformation(props) {
  const { healthRelatedInformation, loadHealthRelatedInformation, resetErrorState } = props;
  const { t } = useTranslation();

  useEffect(() => {
    loadHealthRelatedInformation()
  }, [])

  useEffect(() => {
    return () => {
      resetErrorState()
    }
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
        healthRelatedInformation.data ?
          <>
            <h1 style={{textAlign: "center"}}>{healthRelatedInformation.data.title}</h1>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              <ContentText>{healthRelatedInformation.data.content}</ContentText>
            </div>
            {displayDate()}
          </>
          :
          healthRelatedInformation.loadingError ?
            <ServerError/>
            :
            <div></div>
      }
    </ContentLimiter>
  )

}

  const mapStateToProps = ['healthRelatedInformation']
  const actions = {
    loadHealthRelatedInformation,
    resetErrorState: createResetErrorState('healthRelatedInformation'),
  }

  export default connect(mapStateToProps, actions)(HealthRelatedInformation)



