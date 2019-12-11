import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "../../styles/app-style";
import Landing from "../../pages/Landing";
import Navbar from "../../components/navbar/NavigationBar";
import Geolocate from "../../components/DemoGeoLocate";
import {UsePositionDemo} from "../../components/usePossitionDemo";
import Map from "../../pages/Map";
import Help from "../../pages/Help";
import Page3 from "../../pages/Page3";
import Page4 from "../../pages/Page4";

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
        {/*
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/> */}
        <Route exact path="/gps" component={Geolocate}/>
        <Route exact path="/gpsdemo" component={UsePositionDemo}/>
        <Route exact path="/map" component={Map} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
