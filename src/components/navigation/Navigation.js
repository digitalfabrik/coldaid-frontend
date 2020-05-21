import React, { useState } from 'react'
import IntegreatLogo from './integreatLogo/IntegreatLogo'
import LanguagePicker from './languagePicker/LanguagePicker'

import { makeStyles, withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useTranslation } from 'react-i18next'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import MapIcon from '@material-ui/icons/Map'
import ListIcon from '@material-ui/icons/List'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import HelpIcon from '@material-ui/icons/Help'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { APP_ROUTES } from '../app/App'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  toolbarLeftActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolbarRightActions: {
    display: 'flex',
    flexDirection: 'row',
  },
  menuButtonAction: {
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logoAction: {
    alignSelf: 'stretch',
    [theme.breakpoints.down('sm')]: {
      marginLeft: -16,
    }
  },
  navigationAction: {
    margin: theme.spacing(0, 0.5),
    fontWeight: 500,
  },
  languagePickerAction: {
    marginLeft: theme.spacing(0.5),
  },
  drawerWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
  },
  drawerDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
  },
  drawerIcons: {
    minWidth: theme.spacing(5),
  },
}))

export default function Navigation() {
  const classes = useStyles()
  const { t } = useTranslation()

  const [anchorMoreInformation, setAnchorMoreInformation] = useState(null)
  const handleClickOnMoreInformation = (event) => {
    setAnchorMoreInformation(event.currentTarget)
  }
  const handleCloseMoreInformation = () => {
    setAnchorMoreInformation(null)
  }

  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  const handleDrawerNavigation = () => {
    setDrawerOpen(false)
  }

  const drawer = (
    <div className={classes.drawerWrapper}>
      <div>
        <div className={classes.drawerHeader}>
          <IntegreatLogo/>
        </div>
        <Divider classes={{ root: classes.drawerDivider }}/>
        <List>
          <MenuItem component={Link} to={APP_ROUTES.map} onClick={handleDrawerNavigation}>
            <ListItemIcon classes={{ root: classes.drawerIcons }}>
              <MapIcon/>
            </ListItemIcon>
            <ListItemText primary={t('map_feature_header')}/>
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.shelterOverview} onClick={handleDrawerNavigation}>
            <ListItemIcon classes={{ root: classes.drawerIcons }}>
              <ListIcon/>
            </ListItemIcon>
            <ListItemText primary={t('view_feature_header')}/>
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.kaeltebus} onClick={handleDrawerNavigation}>
            <ListItemIcon classes={{ root: classes.drawerIcons }}>
              <DirectionsBusIcon/>
            </ListItemIcon>
            <ListItemText primary={t('kaeltebus_feature_header')}/>
          </MenuItem>
        </List>
        <Divider variant='middle' classes={{ root: classes.drawerDivider }} style={{ height: 1 }}/>
        <List>
          <MenuItem component={Link} to={APP_ROUTES.legalInformation} onClick={handleDrawerNavigation}>
            <ListItemIcon classes={{ root: classes.drawerIcons }}>
              <AccountBalanceIcon/>
            </ListItemIcon>
            <ListItemText primary={t('legalInformationNavigationText')}/>
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.healthRelatedInformation} onClick={handleDrawerNavigation}>
            <ListItemIcon classes={{ root: classes.drawerIcons }}>
              <LocalHospitalIcon/>
            </ListItemIcon>
            <ListItemText primary={t('healthRelatedInformationNavigationText')}/>
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.adviceInformation} onClick={handleDrawerNavigation}>
            <ListItemIcon classes={{ root: classes.drawerIcons }}>
              <HelpIcon/>
            </ListItemIcon>
            <ListItemText primary={t('adviceInformationNavigationText')}/>
          </MenuItem>
        </List>
        <Divider classes={{ root: classes.drawerDivider }}/>
      </div>
      <div>
        <List>
          <MenuItem component={Link} to={APP_ROUTES.contact} onClick={handleDrawerNavigation}>
            <ListItemText primary={t('contact.navigationLabel')}
                          primaryTypographyProps={{ variant: 'caption' }}/>
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.imprint} onClick={handleDrawerNavigation}>
            <ListItemText primary={t('imprint.navigationLabel')}
                          primaryTypographyProps={{ variant: 'caption' }}/>
          </MenuItem>
          <MenuItem component={Link} to={APP_ROUTES.privacy} onClick={handleDrawerNavigation}>
            <ListItemText primary={t('privacy.navigationLabel')}
                          primaryTypographyProps={{ variant: 'caption' }}/>
          </MenuItem>
        </List>
      </div>
    </div>
  )

  const StyledMenu = withStyles((theme) => ({
    paper: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderWidth: 0,
      borderTopWidth: 2,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
  }))(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))

  return (
    <div>
      <AppBar color="secondary" position='fixed'>
        <Toolbar className={classes.toolbar}>

          <div className={classes.toolbarLeftActions}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButtonAction}
            >
              <MenuIcon/>
            </IconButton>
            <IntegreatLogo className={classes.logoAction}/>
          </div>

          <div className={classes.toolbarRightActions}>
            <Hidden smDown>
              <MenuItem component={Link}
                        to={APP_ROUTES.map}
                        color="inherit"
                        className={classes.navigationAction}>
                {t('map_feature_header')}
              </MenuItem>
              <MenuItem component={Link}
                        to={APP_ROUTES.shelterOverview}
                        color="inherit"
                        className={classes.navigationAction}>
                {t('view_feature_header')}
              </MenuItem>
              <MenuItem component={Link}
                        to={APP_ROUTES.kaeltebus}
                        color="inherit"
                        className={classes.navigationAction}>
                {t('kaeltebus_feature_header')}
              </MenuItem>
              <MenuItem component={'button'} color="inherit"
                        onClick={handleClickOnMoreInformation}
                        className={classes.navigationAction}>
                {t('info_feature_header')}
                <KeyboardArrowDownIcon/>
              </MenuItem>
              <StyledMenu
                anchorEl={anchorMoreInformation}
                keepMounted
                open={Boolean(anchorMoreInformation)}
                onClose={handleCloseMoreInformation}
              >
                <MenuItem component={Link}
                          to={APP_ROUTES.legalInformation}
                          onClick={handleCloseMoreInformation}>
                  <ListItemIcon classes={{ root: classes.drawerIcons }}>
                    <AccountBalanceIcon/>
                  </ListItemIcon>
                  <ListItemText primary={t('legalInformationNavigationText')}/>
                </MenuItem>
                <MenuItem component={Link}
                          to={APP_ROUTES.healthRelatedInformation}
                          onClick={handleCloseMoreInformation}>
                  <ListItemIcon classes={{ root: classes.drawerIcons }}>
                    <LocalHospitalIcon/>
                  </ListItemIcon>
                  <ListItemText primary={t('healthRelatedInformationNavigationText')}/>
                </MenuItem>
                <MenuItem component={Link}
                          to={APP_ROUTES.adviceInformation}
                          onClick={handleCloseMoreInformation}>
                  <ListItemIcon classes={{ root: classes.drawerIcons }}>
                    <HelpIcon/>
                  </ListItemIcon>
                  <ListItemText primary={t('adviceInformationNavigationText')}/>
                </MenuItem>
              </StyledMenu>
            </Hidden>
            <LanguagePicker className={classes.languagePickerAction}/>
          </div>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}
