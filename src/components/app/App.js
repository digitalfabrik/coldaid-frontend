import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Hidden, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Provider } from 'unistore/react'

import store from '../../store/store'

import theme from './theme'

import Home from '../../pages/Home'
import Navbar from '../navigation/Navigation'
import Footer from '../footer/Footer.jsx'

import LegalInformation from '../../pages/LegalInformation'
import Kaeltebus from '../../pages/Kaeltebus'

import FindShelters from '../../pages/shelterOverview/FindShelters'
import MapPage from '../../pages/Map'
import HealthRelatedInformation from '../../pages/HealthRelatedInformation'
import AdviceInformation from '../../pages/AdviceInformation'
import Contact from '../../pages/Contact'
import Imprint from '../../pages/Imprint'
import Privacy from '../../pages/Privacy'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const APP_ROUTES = {
  home: '/',
  map: '/map',
  shelterOverview: '/shelter-overview',
  kaeltebus: '/kaeltebus',
  legalInformation: '/legal-information',
  healthRelatedInformation: '/health-related-information',
  adviceInformation: '/advice-information',
  contact: '/contact',
  imprint: '/imprint',
  privacy: '/privacy',
}

const useStyles = makeStyles((theme) => ({
  toolbarFoundation: theme.mixins.toolbar,
})
)

function App() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <div className={classes.toolbarFoundation} />
          <Switch>
            <Route exact path={APP_ROUTES.home} render={routeProps => <Home {...routeProps} />} />
            <Route exact path={APP_ROUTES.map} component={MapPage} />
            <Route exact path={APP_ROUTES.shelterOverview} component={FindShelters} />
            <Route exact path={APP_ROUTES.kaeltebus} component={Kaeltebus} />
            <Route exact path={APP_ROUTES.legalInformation} component={LegalInformation} />
            <Route exact path={APP_ROUTES.healthRelatedInformation} component={HealthRelatedInformation} />
            <Route exact path={APP_ROUTES.adviceInformation} component={AdviceInformation} />
            <Route exact path={APP_ROUTES.contact} component={Contact} />
            <Route exact path={APP_ROUTES.imprint} component={Imprint} />
            <Route exact path={APP_ROUTES.privacy} component={Privacy} />
            <Redirect to={APP_ROUTES.home} />
          </Switch>

          <Hidden smDown>
            <Footer />
          </Hidden>
        </MuiThemeProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App
