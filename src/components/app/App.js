import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

import GlobalStyles from "./app.style";

import Home from "../../pages/Home";
import Navbar from "../../components/navbar/NavigationBar";

import Help from "../../pages/Info";
import Kaeltebus from "../../pages/Kaeltebus";

import FindShelters from "../../pages/shelterOverview/FindShelters";
import MapPage from "../../pages/Map";


function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles/>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={routeProps => <Home {...routeProps} />}/>
          <Route exact path="/map" component={MapPage}/>
          <Route exact path="/help" component={Help}/>
          <Route exact path="/find_shelters" component={FindShelters}/>
          <Route exact path="/kaeltebus_formular" component={Kaeltebus}/>
          <Redirect to="/"/>
        </Switch>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
