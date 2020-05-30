import React, { useEffect } from 'react'
import ContentLimiter from '../../components/theme/ContentLimiter'
import { connect } from 'unistore/react'
import { createResetErrorState, loadAdviceInformation } from '../../store/actions'

const errorMessage = 'Der Server ist zur Zeit nicht verfügbar. Probieren Sie es später noch einmal!'

function AdviceInformation(props) {
  const { adviceInformation, loadAdviceInformation, resetErrorState } = props

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
      return <div>Letzte Änderung: {new Date(adviceInformation.data.modified_gmt).toLocaleDateString()}</div>
    } else {
      return null
    }
  }

  return (
    <ContentLimiter withBoxShadow>
      {
        adviceInformation.data ?
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

const mapStateToProps = ['adviceInformation']
const actions = {
  loadAdviceInformation,
  resetErrorState: createResetErrorState('adviceInformation'),
}

export default connect(mapStateToProps, actions)(AdviceInformation)
