import React, { useEffect } from 'react'
import ContentLimiter from '../../components/theme/ContentLimiter'
import { connect } from 'unistore/react'
import { loadAdviceInformation } from '../../store/actions'
import { resetRequest } from '../../store/loadData'
import { storeKeys } from '../../store/store'

const errorMessage = 'Der Server ist zur Zeit nicht verfügbar. Probieren Sie es später noch einmal!'

function AdviceInformation(props) {
  const { adviceInformation, language, loadAdviceInformation } = props

  useEffect(() => {
    loadAdviceInformation()
  }, [loadAdviceInformation, language])

  useEffect(() => {
    return () => resetRequest('adviceInformation')
  }, [])

  const displayDate = () => {
    if (adviceInformation.data && adviceInformation.data.modified_gmt) {
      return <div>Letzte Änderung: {new Date(adviceInformation.data.modified_gmt).toLocaleDateString()}</div>
    } else {
      return null
    }
  }

  return (
    <ContentLimiter withBoxShadow>
      {
        adviceInformation.data && !adviceInformation.loadingError ?
          <>
            <h1>{adviceInformation.data.title}</h1>
            <div style={{ whiteSpace: 'pre-wrap' }}>{adviceInformation.data.content}</div>
            <br/>
            {displayDate()}
          </>
          :
          adviceInformation.loadingError ?
            <div>{errorMessage}</div>
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
