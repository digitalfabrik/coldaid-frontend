import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "../../styles/app-style";
import Landing from "../../pages/Landing";
import Navbar from "../../components/navbar/NavigationBar";
import FindShelters from "../../pages/FindShelters";

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
        <Route exact path="/find_shelters" component={FindShelters}/>
        {/* <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/> */}
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
