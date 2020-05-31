import React, { useEffect } from 'react'
import ContentLimiter from '../../components/theme/ContentLimiter'
import { connect } from 'unistore/react'
import { createResetErrorState, loadAdviceInformation } from '../../store/actions'
import {useTranslation} from "react-i18next";
import ServerError from "../../components/serverError/serverError";
import ContentText from "../../components/theme/ContentText";


function AdviceInformation(props) {
  const { adviceInformation, loadAdviceInformation, resetErrorState } = props;
  const { t } = useTranslation();

  useEffect(() => {
    loadAdviceInformation()
  }, [])

  useEffect(() => {
    return () => {
      resetErrorState()
    }
  }, [])

  const displayDate = () => {
    if (adviceInformation.data && adviceInformation.data.modified_gmt) {
      return <ContentText>{t("informationPages.last_changed")} {new Date(adviceInformation.data.modified_gmt).toLocaleDateString()}</ContentText>
    } else {
      return null
    }
  }

  return (
    <ContentLimiter withBoxShadow>
      {
        adviceInformation.data ?
          <>
            <h1 style={{textAlign: "center"}}>{adviceInformation.data.title}</h1>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              <ContentText>{adviceInformation.data.content}</ContentText>
            </div>
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

const mapStateToProps = ['adviceInformation']
const actions = {
  loadAdviceInformation,
  resetErrorState: createResetErrorState('adviceInformation'),
}

export default connect(mapStateToProps, actions)(AdviceInformation)
