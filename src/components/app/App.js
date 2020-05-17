import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import theme from './theme'


import Home from '../../pages/Home'
import Navbar from '../navigation/Navigation'

import LegalInformation from '../../pages/LegalInformation'
import Kaeltebus from '../../pages/Kaeltebus'

import FindShelters from '../../pages/shelterOverview/FindShelters'
import MapPage from '../../pages/Map'
import HealthRelatedInformation from '../../pages/HealthRelatedInformation'
import AdviceInformation from '../../pages/AdviceInformation'

export const APP_ROUTES = {
  home: '/',
  map: '/map',
  shelterOverview: '/shelter-overview',
  kaeltebus: '/kaeltebus',
  legalInformation: '/legal-information',
  healthRelatedInformation: '/health-related-information',
  adviceInformation: '/advice-information',
}

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Switch>
          <Route exact path={APP_ROUTES.home} render={routeProps => <Home {...routeProps} />}/>
          <Route exact path={APP_ROUTES.map} component={MapPage}/>
          <Route exact path={APP_ROUTES.shelterOverview} component={FindShelters}/>
          <Route exact path={APP_ROUTES.kaeltebus} component={Kaeltebus}/>
          <Route exact path={APP_ROUTES.legalInformation} component={LegalInformation}/>
          <Route exact path={APP_ROUTES.healthRelatedInformation} component={HealthRelatedInformation}/>
          <Route exact path={APP_ROUTES.adviceInformation} component={AdviceInformation}/>
          <Redirect to={APP_ROUTES.home}/>
        </Switch>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
