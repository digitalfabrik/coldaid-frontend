import { storeKeys } from '../../store/store'
import { connect } from 'unistore/react'
import React, { useEffect, useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  snackbarSuccessContent: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    minWidth: 'auto',
    maxWidth: '300px',
  },
  snackbarErrorContent: {
    minWidth: 'auto',
    maxWidth: '300px',
  },
}))

function KaeltebusSnackbar(props) {
  const { kaeltebus } = props
  const classes = useStyles()
  const { t } = useTranslation()

  useEffect(() => {
    if (kaeltebus.requestSuccess) {
      handleSuccess()
    }
    if (kaeltebus.requestError) {
      handleError()
    }
  }, [kaeltebus])

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const handleSuccess = () => {
    setOpenSuccessSnackbar(true)
  }
  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false)
  }

  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
  const handleError = () => {
    setOpenErrorSnackbar(true)
  }
  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false)
  }

  return (<>
    {openSuccessSnackbar &&
    <Snackbar style={{ zIndex: 1000 }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={openSuccessSnackbar}
              onClose={handleCloseSuccessSnackbar}
              autoHideDuration={5000}
    ><SnackbarContent classes={{ root: classes.snackbarSuccessContent }} message={t('kaeltebus.successMessage')}/>
    </Snackbar>}
    {openErrorSnackbar &&
    <Snackbar style={{ zIndex: 1000 }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={openErrorSnackbar}
              onClose={handleCloseErrorSnackbar}
              autoHideDuration={5000}
    ><SnackbarContent classes={{ root: classes.snackbarErrorContent }} message={t('kaeltebus.errorMessage')}/>
    </Snackbar>}
  </>)
}

const mapStateToProps = [storeKeys.kaeltebus]
const actions = {}

export default connect(mapStateToProps, actions)(KaeltebusSnackbar)
