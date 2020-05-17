import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";


import Home from "../../pages/Home";
import Navbar from "../navigation/Navigation";

import Help from "../../pages/Info";
import Kaeltebus from "../../pages/Kaeltebus";

import FindShelters from "../../pages/shelterOverview/FindShelters";
import MapPage from "../../pages/Map";

export const APP_ROUTES = {
  home: '/',
  map: '/map',
  shelterOverview: '/shelter-overview',
  kaeltebus: '/kaeltebus',
  help: 'help',
}

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <Switch>
          <Route exact path={APP_ROUTES.home} render={routeProps => <Home {...routeProps} />}/>
          <Route exact path={APP_ROUTES.map} component={MapPage}/>
          <Route exact path={APP_ROUTES.help} component={Help}/>
          <Route exact path={APP_ROUTES.shelterOverview} component={FindShelters}/>
          <Route exact path={APP_ROUTES.kaeltebus} component={Kaeltebus}/>
          <Redirect to={APP_ROUTES.home}/>
        </Switch>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
