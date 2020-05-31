import React, { useEffect} from 'react'
import ContentLimiter from '../../components/theme/ContentLimiter'
import {createResetErrorState, loadLegalInformation} from "../../store/actions";
import {connect} from "unistore/react";
import {useTranslation} from "react-i18next";
import ServerError from "../../components/serverError/serverError";
import ContentText from "../../components/theme/ContentText";


function LegalInformation(props) {
  const { legalInformation, loadLegalInformation, resetErrorState } = props;
  const { t } = useTranslation();

  useEffect(() => {
    loadLegalInformation()
  }, [])

  useEffect(() => {
    return () => {
      resetErrorState()
    }
  }, [])

  const displayDate = () => {
    if (legalInformation.data && legalInformation.data.modified_gmt) {
      return <ContentText>{t("informationPages.last_changed")} {new Date(legalInformation.data.modified_gmt).toLocaleDateString()}</ContentText>
    } else {
      return null;
    }
  }


  return (
    <ContentLimiter withBoxShadow>
      {
        legalInformation.data ?
          <>
            <h1 style={{textAlign: "center"}}>{legalInformation.data.title}</h1>
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

const mapStateToProps = ['legalInformation']
const actions = {
  loadLegalInformation,
  resetErrorState: createResetErrorState('legalInformation'),
}

export default connect(mapStateToProps, actions)(LegalInformation)

