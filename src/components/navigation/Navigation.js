import React, { useState } from 'react'
import IntegreatLogo from './integreatLogo/IntegreatLogo'
import LanguagePicker from './languagePicker/LanguagePicker'

import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useTranslation } from 'react-i18next'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import { APP_ROUTES } from '../app/App'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  toolbarNavigation: {
    display: 'flex',
    flexDirection: 'row',
  },
  languagePicker: {
    alignSelf: 'center'
  }
})

export default function Navigation() {
  const classes = useStyles()
  const { t } = useTranslation()

  const [anchorMoreInformation, setAnchorMoreInformation] = useState(null)

  const handleClickOnMoreInformation = (event) => {
    setAnchorMoreInformation(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorMoreInformation(null);
  }


  return (
    <AppBar color="secondary" position="static">
      <Toolbar className={classes.toolbar}>
        <IntegreatLogo/>
        <div className={classes.toolbarNavigation}>
          <MenuItem component={Link} to={APP_ROUTES.map} color="inherit">
            {t('map_feature_header')}
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.shelterOverview} color="inherit">
            {t('view_feature_header')}
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.kaeltebus} color="inherit">
            {t('kaeltebus_feature_header')}
          </MenuItem>
          <MenuItem color="inherit" onClick={handleClickOnMoreInformation} aria-controls="simple-menu" aria-haspopup="true">
            {t('info_feature_header')}
            <ListItemIcon>
              <AddIcon/>
            </ListItemIcon>
          </MenuItem>
          <Menu
            id="simple-menu"
            anchorEl={anchorMoreInformation}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            keepMounted
            open={Boolean(anchorMoreInformation)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to={APP_ROUTES.home} onClick={handleClose}>Rechtliche Information</MenuItem>
            <MenuItem component={Link} to={APP_ROUTES.home} onClick={handleClose}>Gesundheit</MenuItem>
            <MenuItem component={Link} to={APP_ROUTES.home} onClick={handleClose}>Beratung</MenuItem>
          </Menu>
          <LanguagePicker className={classes.languagePicker}/>
        </div>
      </Toolbar>
    </AppBar>
  )
}
