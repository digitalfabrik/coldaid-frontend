import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "../../styles/app-style";
import Landing from "../../pages/Landing";
import Navbar from "../../components/navbar/NavigationBar";

import Map from "../../pages/Map";
import Help from "../../pages/Info";
import KaeltebusFormular from "../../pages/KaeltebusFormular";
import KaeltebusLogin from "../../pages/KaeltebusLogin";

import FindShelters from "../../pages/ShelterOverview";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <Landing {...routeProps} />}
        />
        <Route exact path="/find_shelters" component={FindShelters} />
        {/*
        <Route exact path="/" component={}/>
      <Route exact path="/" component={}/> */}
        <Route exact path="/map" component={Map} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/find_shelters" component={FindShelters} />
        <Route exact path="/kaeltebus_formular" component={KaeltebusFormular} />
        <Route exact path="/kaeltebus_login" component={KaeltebusLogin} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
